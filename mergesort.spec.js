describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect(mergeSort([]) ).toEqual( [] );
    });

    it('handles an array one number', function(){
        expect( mergeSort([1]) ).toEqual( [1] );
    });

    it('handles an array many numbers', function(){
        expect( mergeSort([5,8,3,12,9,10]) ).toEqual([3,5,8,9,10,12]);
    });
});