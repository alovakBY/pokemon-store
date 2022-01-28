const a = () => {
    function* gen() {
        let result1 = yield "2 + 2 = ?";
        console.log(result1);
        let result2 = yield "4 + 4 = ?";
        console.log(result2);
    }
    let generator = gen();
    const a = generator.next(4);
    const b = generator.next(8);
    console.log(a);
    console.log(b);
    //  generator.next(a);
    //  generator.next(b);
};

export default a;
