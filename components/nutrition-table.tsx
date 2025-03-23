import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function NutritionTable() {
  const nutritionData = [
    { nutrient: "Calories", amount: "150", dailyValue: "8%" },
    { nutrient: "Total Fat", amount: "9g", dailyValue: "12%" },
    { nutrient: "Saturated Fat", amount: "1g", dailyValue: "5%" },
    { nutrient: "Trans Fat", amount: "0g", dailyValue: "" },
    { nutrient: "Cholesterol", amount: "5mg", dailyValue: "2%" },
    { nutrient: "Sodium", amount: "180mg", dailyValue: "8%" },
    { nutrient: "Total Carbohydrate", amount: "15g", dailyValue: "5%" },
    { nutrient: "Dietary Fiber", amount: "1g", dailyValue: "4%" },
    { nutrient: "Total Sugars", amount: "0g", dailyValue: "" },
    { nutrient: "Protein", amount: "10g", dailyValue: "20%" },
    { nutrient: "Vitamin D", amount: "0mcg", dailyValue: "0%" },
    { nutrient: "Calcium", amount: "50mg", dailyValue: "4%" },
    { nutrient: "Iron", amount: "0.5mg", dailyValue: "2%" },
    { nutrient: "Potassium", amount: "350mg", dailyValue: "8%" },
  ]

  return (
    <div className="rounded-lg border shadow">
      <div className="border-b bg-amber-50 p-4">
        <h3 className="text-lg font-semibold">Nutrition Facts</h3>
        <p className="text-sm text-gray-500">Per 100g serving</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nutrient</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">% Daily Value*</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {nutritionData.map((item) => (
            <TableRow key={item.nutrient}>
              <TableCell className={item.nutrient === "Protein" ? "font-bold text-amber-500" : ""}>
                {item.nutrient}
              </TableCell>
              <TableCell className={item.nutrient === "Protein" ? "font-bold text-amber-500" : ""}>
                {item.amount}
              </TableCell>
              <TableCell className={`text-right ${item.nutrient === "Protein" ? "font-bold text-amber-500" : ""}`}>
                {item.dailyValue}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="p-4 text-xs text-gray-500">
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on
        your calorie needs.
      </div>
    </div>
  )
}

