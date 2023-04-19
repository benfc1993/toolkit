# toolkit
code toolkit

## React
### Stores
[Context Store](/react/src/Examples/stores/Context/store/createContextStore.tsx)

[Ref Context Store](/react/src/Examples/stores/RefContext/store/createRefContextStore.tsx)


### Hooks
[Clicked outside](/react/src/hooks/useClickOutside.ts)

[Middleware example hook](/react/src/hooks/useToggleTheme.ts)

### Utils
[Render counter](/react/src/Components/Utils/RenderCounter/RenderCounter.tsx)

---

## Typescript

### Utils
[Object sorting](/typescript/src/sortObject.ts)

### Text formatting
[Sentence Case](/typescript/src/textFormatting/sentenceCase.ts)

## Search tool

There is an included search tool. This requires fzf to be installed on your machine either through `homebrew` 

```bash
brew install fzf
```

or globally through `git`

```bash
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

To setup the global command make the `setup.sh` file executable then run it as sudo. 

```bash
sudo ./setup.sh
```

This will create a global variable for the path to this repo and setup the `toolkit` command.

### Moving the repo

If you move the location of the repo on your machine you can run the `setup.sh` file again to modify the global path variable.

### Using the toolkit command

run 

```bash 
toolkit
```

this will begin the fuzzy search of the toolkit repo. When a file is selected it will copy the contents to your clipboard.