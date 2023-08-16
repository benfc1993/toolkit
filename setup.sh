#! /bin/bash

WD=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
echo $WD
if grep -q "export TOOLKIT_PATH=" ~/.zshrc; then
  if [[ "$OSTYPE" == "darwin"* ]]; 
  then
    sed -i '' -e '/export TOOLKIT_PATH=/d' ~/.zshrc
  else
    echo "Linux"
    sed -i -e '/export TOOLKIT_PATH=/d' ~/.zshrc
  fi
fi

echo "export TOOLKIT_PATH="${WD}/search"" >> ~/.zshrc

rm -rf $TOOLKIT_PATH

mkdir -p "$TOOLKIT_PATH"
cp -r "${WD}/typescript/src" "$TOOLKIT_PATH/typescript/"
cp -r "${WD}/react/src/export" "$TOOLKIT_PATH/react/"
if ! test -f "/usr/local/bin/toolkit"; then
  echo "COPYING"
  chmod u+x "$WD/toolkit" && ln -s "$WD/toolkit" /usr/local/bin/toolkit 
fi

