# New Theatre Backstage Catalogue

[Jekyll](http://jekyllrb.com/) based site to catalogue set, props and costumes. Based on [lx](http://github.com/newtheatre/lx)

![Screenshot](https://github.com/samozzy/backstage/blob/gh-pages/backstage.png?raw=true)

## Editing

Stock lists are stored in [YAML](http://yaml.org/) files within the `_data/` directory.

### Set 

- For large set pieces, edit file `_data/set.yml`:
  - `material`, the primary materials the object is made of e.g. Wood, Leather
  - `name`, useful name of the item 
  - `colour`, primary colours of the item e.g. Brown, Red
  - `paint`, whether the item can be painted (`true` or `false`)
  - `category` of the item. Photos are stored in category subfolders, and item cards are coloured for each category. 
  - `image`, photo filename including extension. 
  - `measurements`, where relevant, including units e.g. 400x400x300mm
  - `notes`, other descriptions of the item, surrounded in quotes where using special characters.
  - `stock`, the number of the item:
    - `good`, in working order
    - `broken`, in need of repair

### Costumes and Props

- For costumes and props edit files `_data/costumes.yml` and `_data/props.yml` respectively. The formats haven't been finalised yet.

## Forking

This project is designed to be hosted using [GitHub Pages](https://pages.github.com/) and requires some knowlege of Git. To use this project for your own venue:

1. Fork the repository.
2. Modify (or delete) `CNAME`, this specifies what host to serve the pages at - see the [Pages documentation](https://help.github.com/articles/adding-a-cname-file-to-your-repository/) for more information.
3. Modify the `_config.yml` changing New Theatre specific values to that of your venue.
4. Modify the data files - see the editing section.
