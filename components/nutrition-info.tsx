import { CircleIcon, BarChart3Icon, FlameIcon, HeartIcon, LeafIcon, MilkIcon } from "lucide-react"

export default function NutritionInfo() {
  return (
    <div className="rounded-lg border bg-white shadow-lg">
      <div className="border-b bg-[#F7F7F7] p-6">
        <h3 className="text-xl font-bold text-[#0D0D0D]">Nutrition Facts</h3>
        <p className="text-sm text-gray-500">Per 100g serving</p>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Calories */}
        <div className="flex flex-col items-center rounded-lg border p-6 text-center">
          <FlameIcon className="mb-4 h-10 w-10 text-[#E63946]" />
          <h4 className="mb-2 text-lg font-semibold text-[#0D0D0D]">Calories</h4>
          <p className="text-3xl font-bold text-[#0D0D0D]">150</p>
          <p className="mt-2 text-sm text-gray-500">kcal</p>
        </div>

        {/* Protein */}
        <div className="flex flex-col items-center rounded-lg border p-6 text-center">
          <BarChart3Icon className="mb-4 h-10 w-10 text-[#2A9D8F]" />
          <h4 className="mb-2 text-lg font-semibold text-[#0D0D0D]">Protein</h4>
          <p className="text-3xl font-bold text-[#2A9D8F]">10g</p>
          <p className="mt-2 text-sm text-gray-500">20% Daily Value</p>
        </div>

        {/* Carbs */}
        <div className="flex flex-col items-center rounded-lg border p-6 text-center">
          <CircleIcon className="mb-4 h-10 w-10 text-[#F9A826]" />
          <h4 className="mb-2 text-lg font-semibold text-[#0D0D0D]">Carbohydrates</h4>
          <p className="text-3xl font-bold text-[#0D0D0D]">15g</p>
          <p className="mt-2 text-sm text-gray-500">5% Daily Value</p>
        </div>

        {/* Fat */}
        <div className="flex flex-col items-center rounded-lg border p-6 text-center">
          <HeartIcon className="mb-4 h-10 w-10 text-[#F26419]" />
          <h4 className="mb-2 text-lg font-semibold text-[#0D0D0D]">Total Fat</h4>
          <p className="text-3xl font-bold text-[#0D0D0D]">9g</p>
          <p className="mt-2 text-sm text-gray-500">12% Daily Value</p>
        </div>

        {/* Fiber */}
        <div className="flex flex-col items-center rounded-lg border p-6 text-center">
          <LeafIcon className="mb-4 h-10 w-10 text-[#2A9D8F]" />
          <h4 className="mb-2 text-lg font-semibold text-[#0D0D0D]">Dietary Fiber</h4>
          <p className="text-3xl font-bold text-[#0D0D0D]">1g</p>
          <p className="mt-2 text-sm text-gray-500">4% Daily Value</p>
        </div>

        {/* Calcium */}
        <div className="flex flex-col items-center rounded-lg border p-6 text-center">
          <MilkIcon className="mb-4 h-10 w-10 text-[#1D3557]" />
          <h4 className="mb-2 text-lg font-semibold text-[#0D0D0D]">Calcium</h4>
          <p className="text-3xl font-bold text-[#0D0D0D]">50mg</p>
          <p className="mt-2 text-sm text-gray-500">4% Daily Value</p>
        </div>
      </div>

      <div className="border-t p-4 text-xs text-gray-500">
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on
        your calorie needs.
      </div>
    </div>
  )
}

