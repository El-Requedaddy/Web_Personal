---
layout: ../../layouts/PageLayout.astro
title: "Music"
description: "My favorite songs"
---

Here you can put your favorite music playlists.

Use the `{% media audio %}` tag to embed NetEase Cloud Music or QQ Music playlists:

```markdown
{% media audio %}
- title: My playlist
  list:
    - https://music.163.com/#/playlist?id=YOUR_PLAYLIST_ID
{% endmedia %}
```

{% media audio %}
- title: Favorite Playlist
  list:
    - https://music.163.com/#/playlist?id=8676645748
- title: Super Kaguya-hime!
  list:
    - https://music.163.com/#/album?id=358640968
{% endmedia %}
