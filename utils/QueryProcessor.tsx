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
    
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
        const x: number = parseInt(addMatch[1]);
        const y: number = parseInt(addMatch[2]);
        return (x+y).toString();
  }
  return "";
}
