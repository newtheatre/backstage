# New Theatre Backstage Catalogue

[Jekyll](http://jekyllrb.com/) based site to catalogue set, props and costumes. Based on [lx](http://github.com/newtheatre/lx)

![Screenshot](https://raw.githubusercontent.com/newtheatre/lx/gh-pages/screenshot.png)

## Editing

Stock lists are stored in [YAML](http://yaml.org/) files within the `_data/` directory.

- For gels edit file `_data/gels.yml`:
  - `code`, the filter code e.g. L201.
  - `name`, the filter name e.g. Full C.T. Blue.
  - `description`, a short description of the colour surrounded with quotes to allow the use of special characters.
  - `color`, a [hexadecimal representation](https://en.wikipedia.org/wiki/Web_colors) of the colour without the hash prefix.
  - `stock`, the stock levels of the filter.
    - `sheet`, number of sheets held.
    - `cut`, rough number of pre-cut filters held.

- For lanterns edit file `_data/lanterns.yml`, the format hasn't been finalised yet.

## Updating library from leefilters.com

The script `_bin/lee_scrape.py` will load colour data, names and descriptions from LEE's catalogue. `_data/gels.yml` will be read in and updated where colours are present.

## Adding stocktake data

Type out, or use a spreadsheet program to write `_stocktake/cut.csv` and `_stocktake/sheet.csv`. Cut has three columns (none, some, many) whereas sheet has one which is unlabelled. Type out codes as you count, *i.e.* three L201s would be L201 repeated three times on their own line.

Once CSVs are complete run `_bin/stocktake.py`, the script will warn if it's adding colours the data file has no name or colour information for.

## Forking

This project is designed to be hosted using [GitHub Pages](https://pages.github.com/) and requires some knowlege of Git. To use this project for your own venue:

1. Fork the repository.
2. Modify (or delete) `CNAME`, this specifies what host to serve the pages at - see the [Pages documentation](https://help.github.com/articles/adding-a-cname-file-to-your-repository/) for more information.
3. Modify the `_config.yml` changing New Theatre specific values to that of your venue.
4. Modify the data files - see the editing section.
