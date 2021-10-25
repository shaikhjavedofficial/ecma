const UnDuplicateArr = (objArr) => {
    let splitted = objArr.split(" ");
    let newArr = [];
    splitted.filter((element, index) => {
        objArr.indexOf(element) !== index && newArr.push(element)
    })
    const myunique = [...new Set(newArr)];
    return myunique.sort();
}
console.log(UnDuplicateArr("Lorem ipsum dolor sit amet consectetur Lorem adipisicing elit. Eaque tempora quod provident repellat dolores, officiis in unde minima, dolorem, vitae aliquam soluta veniam accusantium porro blanditiis perspiciatis sed iusto qui! Porro, reiciendis fugit repellendus natus quasi odit. Nam, omnis molestias repellendus modi sunt vitae possimus animi iusto, illum libero mollitia temporibus ad asperiores aspernatur iste minima dicta dolorum iure, error fugit voluptatibus explicabo quia facere! Voluptatum rem, rerum sequi sint nulla at ut excepturi animi laudantium aspernatur debitis modi illum. Illum, nemo! Libero, est cum. Maxime laborum, quis magni corporis ut commodi nulla placeat quae cupiditate facere, natus fuga odio"));