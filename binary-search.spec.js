describe('Binary Search', () => {
    let array = []
    beforeEach(() => {
        for (let i = 0; i <= 100; i++) {
            array.push(i)
        }
    });

    describe('Iterative linear search', () => {
    it('should find the number 0', () => {
        expect(binarySearchMethod(0, array)).toEqual(0)
      });
      it('should find the number 9', () => {
        expect(binarySearchMethod(9, array)).toEqual(9);
      });
      it('should find the number 10', () => {
        expect(binarySearchMethod(10, array)).toEqual(10);
      });
      it('should find the number 99', () => {
        expect(binarySearchMethod(99, array)).toEqual(99)
      });

      it('should NOT find the number -3', () => {
        expect(binarySearchMethod(-3, array)).toEqual(false);
      });
      it('should NOT find the number 1725', () => {
        expect(binarySearchMethod(1725, array)).toEqual(false);
      });
      
      

    });
    
  });
  
  