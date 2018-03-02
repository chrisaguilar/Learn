# NVM (Node Version Manager)

## Installation
```shell
$ yes | trizen -S nvm
```

## Configuration
### `${HOME}/.config/zsh/zshrc.d/nvm.zsh`
```shell
#!/usr/bin/env zsh

# Set up Node Version Manager
export NVM_DIR="${HOME}/.nvm"                                           # Directory where NVM installs node versions and packages.
export NVM_SRC="/usr/share/nvm"                                         # The AUR package installs it to here.
[ -s "${NVM_SRC}/nvm.sh" ] && . "${NVM_SRC}/nvm.sh"                     # Load NVM
[ -s "${NVM_SRC}/bash_completion" ] && . "${NVM_SRC}/bash_completion"   # Enable tab-completion of NVM commands

# Calls `nvm use` automatically when opening a directory that contains a `.nvmrc` and a valid version string
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "${nvmrc_path}" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "${nvmrc_node_version}" = "N/A" ]; then
      nvm install
    elif [ "${nvmrc_node_version}" != "${node_version}" ]; then
      nvm use
    fi
  elif [ "${node_version}" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## `.nvmrc`
```shell
$ echo "5.9" > .nvmrc           # Use latest 5.9 release
$ echo "lts/*" > .nvmrc         # Use latest LTS version
$ echo "node" > .nvmrc          # Use latest version


$ nvm use                       # Install version specified in `.nvmrc`
```

## Usage
```shell
$ nvm install node              # Install latest release of node
$ nvm use node                  # Use the installed version
$ nvm use system                # Use the system-installed version of node
$ nvm run node --version        # Run with the installed version
$ nvm run system --version      # Run with the system-installed version
$ nvm exec 4.2 node --version   # Run any arbitrary command in a subshell with a specific version of node
$ nvm which 5.0                 # Get the path to the executable where the specified version is installed.
```

## Migrating Global Packages
```shell
$ nvm install node --reinstall-packages-from=node
$ nvm install 6 --reinstall-packages-from=5
```

### `${NVM_DIR}/default-packages`
You can also specify default global packages.
These will automatically be installed when you install a new version of node.
```shell
rimraf
object-inspect@1.0.2
stevemao/left-pad
```

## Listing Versions
```shell
$ nvm ls                        # List installed versions
$ nvm ls-remote                 # List versions avalable to install
```
## Misc
```shell
$ nvm deactivate                # Restore ${PATH} and deactivate nvm
$ nvm alias default node        # Set the default version of node
```
