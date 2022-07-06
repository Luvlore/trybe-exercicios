# Primeiro Estágio
FROM nginx:1.21-alpine AS primeiro-estagio
# toda linha FROM significa o ínicio de um novo estágio
# cada estágio pode ser como uma imagem Docker intermediária
# a última referência FROM sempre será a imagem final
WORKDIR /site

COPY config-toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public /usr/share/nginx/html
# é aqui que está o segredo na construção de múltiplos estágios
# o copy tem a capacidade de copiar arquivos de múltiplos estágios
# a flag --from indica que devemos copiar o seguinte arquivo ou pasta de um estágio para o estágio stual
# neste caso, está sendo copiado as páginas html resultantes do Hugo diretamente para uma imagem DOcker limpa de nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
