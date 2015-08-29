var parser = new BrainfuckParser();

var helloWorld = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';
var fibonacciNumbers = '+++++++++++>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]';

QUnit.test( "Hello World", function( assert ) 
{
	var result = parser.parse(helloWorld);
	var expected = 'Hello World!\n'
  assert.equal(result, expected, "Hello World Test" );
});

QUnit.test( "Fibonacci Numbers", function( assert ) 
{
	var result = parser.parse(fibonacciNumbers);
	var expected = '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89'
  assert.equal(result, expected, "Fibonacci Numbers Test" );
});
