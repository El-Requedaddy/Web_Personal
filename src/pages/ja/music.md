---
layout: ../../layouts/PageLayout.astro
title: "音楽"
description: "お気に入りの曲"
---

ここにお気に入りの音楽プレイリストを置くことができます。

`{% media audio %}` タグを使用して、NetEase Cloud Music または QQ Music のプレイリストを埋め込みます：

```markdown
{% media audio %}
- title: 私のプレイリスト
  list:
    - https://music.163.com/#/playlist?id=YOUR_PLAYLIST_ID
{% endmedia %}
```

{% media audio %}
- title: お気に入りのプレイリスト
  list:
    - https://music.163.com/#/playlist?id=8676645748
- title: スーパーかぐや姫！
  list:
    - https://music.163.com/#/album?id=358640968
{% endmedia %}
