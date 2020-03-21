set quantidadePaginas=7
rem document.getElementsByTagName("iframe")[1].src
rem https://files.passeidireto.com/3a2c02e8-4c9e-49ea-b869-60e0745209e2/bg1.png
set s1="https://files.passeidireto.com/3a2c02e8-4c9e-49ea-b869-60e0745209e2/bg"
set s2=".png"
FOR /L %%A IN (1,1,%quantidadePaginas%) DO (
   start "" %s1%%%A%s2%
)