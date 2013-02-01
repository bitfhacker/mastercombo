# mastercombo

A jQuery plugin to cut the effort of create cascade comboboxes.  [Check out the live demo](http://jsbin.com/ikumer/6)

mastercombo simplify the creation of linking ``<select>`` tags, by creating ``mastercombo`` atribute in ``<select>`` tag and ``master`` attribute in ``<option>`` tag.

```html
<select id="country" name="country">
    <option value="PT">Portugal</option>
    <option value="USA">USA</option>
</select>

<select id="city" mastercombo="country">
    <option master="PT" value="AMA">Amadora</option>
    <option master="PT" value="LIS">Lisboa</option>
    <option master="PT" value="POR">Porto</option>
    <option master="USA" value="ABE">Aberdeen</option>
    <option master="USA" value="BER">Berkeley</option>
    <option master="USA" value="BOS">Boston</option>
</select>
```

## How to use

1. include jQuery (dah!)
2. include ``mastercombo.js``
3. At last but not least, run the plugin after the DOM gets loaded:

```
    $().ChildCombo();
```

## License

[MIT License](http://opensource.org/licenses/MIT)
