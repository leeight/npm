:: Created by npm, please don't edit manually.
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" "%~dp0\.\node_modules\npm\bin\edp-cli.js" %*
) ELSE (
  node "%~dp0\.\node_modules\npm\bin\edp-cli.js" %*
)
