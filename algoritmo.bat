set quantidadePaginas=32
rem document.getElementsByTagName("iframe")[1].src
rem https://jigsaw.minhabiblioteca.com.br/books/9788580550269/cfi/0!/4/2@100:0.00?jigsaw_brand=integradaminhabiblioteca&dps_on=false&xdm_e=https%3A%2F%2Fintegrada.minhabiblioteca.com.br&xdm_c=default4800&xdm_p=1
set s1="https://jigsaw.minhabiblioteca.com.br/books/9788530976880/cfi/6/"
set s2="!/4/2/2@0:10.0?jigsaw_brand=integradaminhabiblioteca&dps_on=false&xdm_e=https%3A%2F%2Fintegrada.minhabiblioteca.com.br&xdm_c=default9667&xdm_p=1"
FOR /L %%A IN (2,2,%quantidadePaginas%) DO (
   start "" %s1%%%A%s2%
)