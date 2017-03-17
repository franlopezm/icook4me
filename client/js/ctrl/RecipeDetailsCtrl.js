/* eslint no-undef: "off" */
(function () {
  'use strict'
  angular
    .module('iCook4meApp')
    .controller('RecipeDetailsCtrl', RecipeDetailsCtrl)

  function RecipeDetailsCtrl ($scope, $rootScope, $routeParams, $location, $anchorScroll, ApiRecipesFact) {
    $rootScope.section = ''
    const id = $routeParams.id
    $location.hash('top')
    $anchorScroll()

    ApiRecipesFact.getAllRecipe(id)
      .then(({data}) => $scope.recipe = data)

    /* $scope.recipe = [{
      image: 'http://www.recetasderechupete.com/wp-content/uploads/2015/07/TORTILLA-002-525x360.jpg',
      title: 'Tortilla de patatas',
      publisher: 'recetas de rechupete',
      description: 'Mi tortilla desde siempre ha sido, y será, con cebolla, os advierto porque sé que no a todo el mundo le gusta. Si no la queréis sólo tenéis que seguir la receta sin ella. A todos aquellos que me habéis pedido la receta por mail, y la mayoría sois de fuera de España, os recomiendo el toque dulce que le da la cebolla. La primera prueba que sea con ella, la siguiente a vuestra elección.',
      ingredients: [
        '8 huevos camperos o 10 huevos normales.',
        '1 kg de patatas gallegas',
        'Aceite de oliva virgen extra para la fritura de las patatas',
        '1 cebolla grande (opcional)',
        'Sal (al gusto)'],
      preparation: [
        'Pelamos las patatas, las lavamos para quitar restos de suciedad y muy importante, las secamos. Cortamos en láminas semifinas, a mí no me gusta que se deshagan sino que al freírlas se tuesten un poco. Las colocamos en un bol grande, donde luego vamos a mezclar con el huevo y añadimos sal al gusto. Removemos bien y reservamos.',
        'Elegimos nuestra sartén más grande y antiadherente. La ponemos al fuego y añadimos un buen aceite de oliva virgen extra, no tengáis miedo en gastaros un poco de dinero en aceite, le va a dar ese punto de sabor que distingue vuestra tortilla de las demás, podéis emplear muchas variedades: arbequina, picual, cornicabra, hojiblanca, royal… el que más os guste, pero de calidad.',
        'Introducimos las patatas cortadas y ya saladas y dejamos que se cocinen durante aproximadamente veinte minutos a fuego bajo. El tema del grosor de las patatas también va a gustos y hay quien prefiere cortarlas a trozos muy pequeños, en láminas muy finas que casi se rompan al freír y o más bien grandes.',
        'Mientras se están friendo las patatas, en el bol donde luego vamos a echar las patatas batimos los huevos, reservamos. Pelamos la cebolla y cortamos lo más fino posible. En otra sartén calentamos aove y añadimos los trozos de cebolla. Pochamos hasta que tenga un color dorado, que tenga un punto de caramelización pero sin llegar a quemarse. La cebolla se hará antes que las patatas, así que escurrimos y añadimos al bol con el huevo batido.',
        'Os dejo con un truco que le dará a la tortilla un toque diferente y muy rico, es totalmente opcional. Si tenéis en la nevera cebolla caramelizada o la queréis hacer, sustituid la cebolla pochada por la caramelizada. Quedará impresionante.',
        'Quitamos con una espumadera de la sartén, dejando las patatas con el menor resto de aceite posible, bien escurridas. Si no queremos nada de aceite extra podemos emplear un colador grande, las dejamos escurrir y luego las introducimos al bol con la cebolla y el huevo.',
        'Reposamos la futura tortilla durante 15 minutos para que se junten bien todos los sabores. Pasados esos minutos esta mezcla ya está deliciosa, probad a tostar un poco de pan y añadidle una capita con esta mezcla, increíble.',
        'En la misma sartén en la que hemos frito las patatas y una vez retirado el aceite (que podremos emplear para otras recetas ya que las patatas no dejan casi sabor en el aceite de oliva), cocinamos la mezcla que tenemos en reposo. A mí me gusta poco hecha, que al partirla con el tenedor salga un poco de huevo líquido.',
        'Para este tipo de tortilla sólo necesitamos 4 minutos a fuego medio-alto por cada lado. Depende de lo cuajada que queramos que quede la tortilla.',
        'Para darle la vuelta yo empleo un plato llano grande que tengo para las ensaladas. Pero se puede usar una tapadera de borde liso, incluso ahora he visto que venden tapaderas especiales para dar la vuelta a la tortilla.',
        'Emplead el método más cómodo y que más fácil os sea para que no se os desparrame, con cuidado. No desesperéis si no os sale, en ese caso tendréis una tortilla más cuajada, pero igual de rica.'
      ],
      id: 'asdfasldfjasldfj'
    }] */
  }
})()
