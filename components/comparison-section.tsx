import Image from "next/image"

export default function ComparisonSection() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 md:flex-row">
      <div className="flex flex-1 flex-col items-center rounded-lg bg-white p-6 shadow-lg text-[#0D0D0D]">
        <div className="mb-4 text-xl font-semibold text-gray-500">Regular Chips</div>
        <div className="relative mb-6 h-[150px] w-[150px]">
          <Image src="/images/regular-chips.webp" alt="Regular Chips" fill className="object-contain" />
        </div>
        <div className="text-center text-4xl font-bold text-gray-400">0-1g</div>
        <div className="mt-2 text-center text-gray-500">protein per 100g</div>
      </div>
      <div className="text-4xl font-bold text-white">VS</div>
      <div className="flex flex-1 flex-col items-center rounded-lg bg-white p-6 shadow-lg text-[#0D0D0D]">
        <div className="mb-4 text-xl font-semibold text-[#E63946]">CrunchFuel</div>
        <div className="relative mb-6 h-[150px] w-[150px]">
          <Image src="/images/protein-chips.webp" alt="CrunchFuel" fill className="object-contain" />
        </div>
        <div className="text-center text-4xl font-bold text-[#2A9D8F]">10g</div>
        <div className="mt-2 text-center text-gray-500">protein per 100g</div>
      </div>
    </div>
  )
}

