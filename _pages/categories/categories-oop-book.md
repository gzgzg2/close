---
title: 객체지향 책 모음
layout: archive
permalink: categories/oop_book
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.oop_books %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}