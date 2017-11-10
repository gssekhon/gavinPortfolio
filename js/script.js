/***
code learned from
https://stackoverflow.com/questions/8114657/how-to-style-the-parent-element-when-hovering-a-child-element
***/

$('#linkedin').on('mouseover', function(){
  console.log("mouseover");
  $(this).closest('.bg1z').addClass('#linkedin')
}).on('mouseout', function(){
  $(this).closest('.bg1z').removeClass('#linkedin');
});
