describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array one number', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles an array many numbers', function(){
        expect( bubbleSort([5,8,3,12,9,10]) ).toEqual([3,5,8,9,10,12]);
    });
});