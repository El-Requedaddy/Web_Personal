---
layout: ../layouts/PageLayout.astro
title: "Música"
description: "Mis canciones favoritas"
---

Aquí puedes poner tus listas de reproducción de música favoritas.

Usa la etiqueta `{% media audio %}` para incrustar listas de reproducción de NetEase Cloud Music o QQ Music:

```markdown
{% media audio %}
- title: Mi lista de reproducción
  list:
    - https://music.163.com/#/playlist?id=TU_ID_DE_LISTA
{% endmedia %}
```

{% media audio %}
- title: Lista de reproducción favorita
  list:
    - https://music.163.com/#/playlist?id=8676645748
- title: Super Kaguya-hime!
  list:
    - https://music.163.com/#/album?id=358640968
{% endmedia %}
