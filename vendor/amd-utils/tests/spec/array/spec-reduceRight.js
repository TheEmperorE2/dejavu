define(['src/array/reduceRight'], function (reduceRight) {

    describe('array/reduceRight()', function () {

        it('should reduce array into a single value', function () {

            var arr = [1, 2, 3, 4];

            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }

            function mult(prev, cur, idx, arr) {
                return prev * cur;
            }

            expect( reduceRight(arr, sum) ).toBe( 10 );
            expect( reduceRight(arr, mult) ).toBe( 24 );

        });

        it('should allow init value', function () {

            var arr = [1, 2, 3, 4];

            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }

            function mult(prev, cur, idx, arr) {
                return prev * cur;
            }

            expect( reduceRight(arr, sum, 10) ).toBe( 20 );
            expect( reduceRight(arr, mult, 10) ).toBe( 240 );

        });

        it('should pass proper params to callback', function () {

            var base = [1, 2, 3, 4];

            function foo(prev, cur, idx, arr) {
                expect( arr[idx + 1] ).toBe( prev );
                expect( arr ).toBe( base );
                return cur;
            }

            expect( reduceRight(base, foo) ).toBe( 1 );

        });

        it('should throw error if empty', function () {
            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }
            expect( function(){ reduceRight([], sum); } ).toThrow();
        });

        it('should work on empty arrays if provide initVal', function () {
            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }
            expect( reduceRight([], sum, 10) ).toBe(10);
        });

    });


});
