# mastercombo

A jQuery plugin to cut the effort of create cascade comboboxes.

mastercombo simplify the creation of linking ``<select>`` tags, by creating two html attributes: ``mastercombo`` in ``<select>`` tag and ``master`` in ``<option>`` tag.

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

Não sabes português? És mesmo BURRO! É só fazer o include e chamar o plugin depois de $(document).ready( function () { blah, blah, blah }); 
