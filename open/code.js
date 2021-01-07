let itemNumb = 4;

function addNew() {
  let itemName = $('#fieldName').val()
  let itemTime = $('#fieldTime').val()
  let itemURL = $('#fieldURL').val()

  let itemCode = '<div class="listItem" id="item'+itemNumb+'"><div id="itemDot" class="itemRow">◯</div><button type="button" onclick="removeItem(\'item'+itemNumb+'\')" class="alignEnd">Remove this item</button><br><br><p id="itemName" class="itemRow">'+itemName+'</p><p id="itemSep" class="itemRow"> - </p><p id="itemTime" class="itemRow">'+itemTime+'</p><a href="'+itemURL+'" id="itemURL" class="alignEnd"><p>Join Zoom</p></a></div>';

  $('#sortable').append(itemCode);
  itemNumb += 1;
}

function removeItem(itemID) {
  $('#'+itemID).remove();
}
