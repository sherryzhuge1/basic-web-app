export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return ("szhuge");
  }
  if (query.toLowerCase().includes("name")) {
    return ("sherry");
  }

  if (query.toLowerCase().includes("plus")) {
    // Extract the numbers using regex
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length === 2) {
      // Parse the numbers and add them
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      return (num1 + num2).toString();
    } else {
      return "Invalid query. Please provide two numbers to add.";
    }}
    
    const match1 = query.match(/What is (.+)/);
    if (match1) {
        const expression = match1[1]
            .replace(/plus/g, '+')
            .replace(/minus/g, '-')
            .replace(/multiplied by/g, '*')
            .replace(/divided by/g, '/');
        
        try {
            // Use the `eval` function to compute the result safely
            const result = eval(expression);
            console.log(result.toString());
        } catch (error) {
            console.log("Invalid expression.");
        }
    }

    const match = query.match(/What is (\d+)\s*(plus|minus|multiplied by|divided by)\s*(\d+)/);
        if (match) {
            const x = parseInt(match[1], 10);
            const operator = match[2];
            const y = parseInt(match[3], 10);

            switch (operator) {
                case "plus":
                    return (x + y).toString();
                case "minus":
                    return (x - y).toString();
                case "multiplied by":
                    return (x * y).toString();
                case "divided by":
                    return y !== 0 ? (x / y).toString() : "Error: Division by zero";
                default:
                    return "Invalid operation.";
            }
        }


  return "";
}
