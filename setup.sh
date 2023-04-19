#! /bin/bash

WD=$(pwd)
if ! grep -q "export TOOLKIT_PATH=" ~/.zshrc;
then
  sed -i '/export TOOLKIT_PATH="/d' ~/.zshrc
  echo "export TOOLKIT_PATH="${WD}/typescript/src"" >> ~/.zshrc

fi

# if ! test -f "/usr/local/bin/toolkit"; then
  echo "COPYING"
  cp toolkit /usr/local/bin/toolkit && chmod u+x /usr/local/bin/toolkit
# fi
