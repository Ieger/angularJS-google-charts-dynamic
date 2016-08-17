// Code goes here

var app = angular.module('myApp', [ 'googlechart' ]);

app.controller('MainCtrl', function($scope) {
var avaliacoes_descTipo = ["Valor 1", "Valor 2", "Valor 3", " Valor 4"];
var avaliacoes_quantidade = [2,2,3, 4];
var val = [];
var i;
var val1 = [];
$scope.avaliacoes = {};

  for (i = 0; i < avaliacoes_descTipo.length; i++) {
    val = {c: [
      {v: avaliacoes_descTipo[i]},
      {v: avaliacoes_quantidade[i]}
    ]};
  val1.push(val);
  }

$scope.avaliacoes.type = "PieChart";

$scope.avaliacoes.data = {"cols": [
{id: "t", label: "Topping", type: "string"},
{id: "s", label: "Slices", type: "number"}
], "rows":
  val1
};

$scope.avaliacoes.options = {
'title': '',
'legend' : {'position': 'bottom'}
};

});