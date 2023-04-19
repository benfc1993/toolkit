#! /bin/bash

WD=$(pwd)
if grep -q "export TOOLKIT_PATH=" ~/.zshrc; then
  sed -i '' -e '/export TOOLKIT_PATH=/d' ~/.zshrc
fi

  echo "export TOOLKIT_PATH="${WD}/typescript/src"" >> ~/.zshrc
if ! test -f "/usr/local/bin/toolkit"; then
  echo "COPYING"
  cp toolkit /usr/local/bin/toolkit && chmod u+x /usr/local/bin/toolkit
fi
