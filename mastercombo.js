(function($) {
  $.fn.ChildCombo = function( options ) {

	var settings = $.extend({}, {variavel: 'valor'}, options);	
	
	$('select[mastercombo]').each( function() {
		
		/*
		 *  Primeiro guarda-se os valores com a função data
		 */
		var a = [];
		$('option',this).each( function() {
			a.push({val: $(this).val(), master: $(this).attr('master'), txt: $(this).text()});
			
		});
		$('#' + $(this).attr('mastercombo')).data({child: $(this).attr('id'), dados: a});
		
		/*
		 *  Depois criam-se os eventos de cada selectbox 
		 */
		$("#" + $(this).attr('mastercombo')).change(function() {
			
			dados   = $(this).data().dados;
			child = $('#' + $(this).data().child );
			
			$('option', child).remove();
			sel = $(this).find("option:selected").val();
			
			for (var i=0; i<dados.length; i++)
				if (sel == dados[i].master)
					$(child).append( $("<option></option>").attr("value",dados[i].val).text(dados[i].txt) );
			$(child).change(); // cada vez que um mastercombo muda, depoleta-se o change da combobox "filha"
		});

		/*
		 * No final, despoleta-se os eventos de change()
		 */
		$('select[mastercombo]').each( function() {
			$("#" + $(this).attr('mastercombo')).change();
		});

	})
	
  };
})(jQuery);