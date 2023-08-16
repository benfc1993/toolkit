#! /bin/bash

WD=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
echo $WD
if grep -q "export TOOLKIT_PATH=" ~/.zshrc; then
  sed -i '' -e '/export TOOLKIT_PATH=/d' ~/.zshrc
fi

  echo "export TOOLKIT_PATH="${WD}/search"" >> ~/.zshrc
  mkdir -p "$TOOLKIT_PATH/search"
  cp -r ./typescript/src/ "$TOOLKIT_PATH/typescript/"
  cp -r ./react/src/export/ "$TOOLKIT_PATH/react/"
if ! test -f "/usr/local/bin/toolkit"; then
  echo "COPYING"
  chmod u+x "$WD/toolkit" && ln -s "$WD/toolkit" /usr/local/bin/toolkit 
fi

