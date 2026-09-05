"use client";

import React, { useState } from "react";
import { FlavorKey } from "@/components/FlavorSelector";
import {
  Clock,
  Flame,
  ChefHat,
  Users,
  CheckCircle2,
  Printer,
  Share2,
  Sparkles,
  Utensils,
  Gauge,
} from "lucide-react";

interface RecipeSectionProps {
  activeFlavor: FlavorKey;
  accentText: string;
  badgeStyle: string;
  cardBg: string;
  cardIcon: string;
}

export interface Ingredient {
  name: string;
  amountPerServing: number;
  unit: string;
  note?: string;
}

export interface RecipeInfo {
  prepTime: string;
  cookTime: string;
  difficulty: string;
  calories: string;
  profile: {
    sweetness: number;
    richness: number;
    chewiness: number;
    creaminess: number;
  };
  ingredients: Ingredient[];
  steps: { step: number; title: string; desc: string }[];
  secretTip: string;
}

export const recipeData: Record<FlavorKey, RecipeInfo> = {
  chocolate: {
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Intermediate",
    calories: "380 kcal",
    profile: { sweetness: 65, richness: 95, chewiness: 100, creaminess: 90 },
    ingredients: [
      { name: "Raw Cassava Tapioca Pearls", amountPerServing: 50, unit: "g", note: "Hand-rolled preferred" },
      { name: "70% Single-Origin Belgian Dark Chocolate", amountPerServing: 40, unit: "g", note: "Melted in warm cream" },
      { name: "Okinawa Black Brown Sugar", amountPerServing: 30, unit: "g", note: "For pearl syrup glaze" },
      { name: "Organic Whole Milk or Barista Oat Milk", amountPerServing: 200, unit: "ml" },
      { name: "Heavy Whipping Cream", amountPerServing: 50, unit: "ml" },
      { name: "Dark Cacao Powder", amountPerServing: 1, unit: "tsp", note: "For dusting top foam" },
      { name: "Solid Ice Cubes", amountPerServing: 150, unit: "g" },
    ],
    steps: [
      {
        step: 1,
        title: "Simmer Tapioca Pearls in Black Sugar",
        desc: "Boil cassava pearls in water for 20 minutes until translucent and chewy. Drain, then simmer in dark Okinawa brown sugar syrup for 10 minutes until deeply glazed.",
      },
      {
        step: 2,
        title: "Craft Velvet Belgian Cacao Base",
        desc: "Gently melt 70% dark Belgian chocolate with warm cream over a double boiler until glossy and velvety smooth.",
      },
      {
        step: 3,
        title: "Glass Decoration & Pearl Layering",
        desc: "Spoon warm brown sugar pearls into the base of a tall highball glass. Swirl extra dark chocolate syrup along the inner glass walls for signature marbling.",
      },
      {
        step: 4,
        title: "Ice & Chilled Milk Infusion",
        desc: "Fill glass with solid ice cubes. Slowly pour chilled organic whole milk over the ice, leaving 1 inch at the top.",
      },
      {
        step: 5,
        title: "Crown with Chocolate Cream & Cacao Dust",
        desc: "Top with whipped chocolate cream and dust lightly with raw dark cacao powder. Serve immediately with a wide glass straw.",
      },
    ],
    secretTip:
      "For the ultimate chewy texture, never rinse cooked tapioca pearls in cold water. Let them steep warm in the brown sugar syrup until serving!",
  },
  strawberry: {
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    calories: "310 kcal",
    profile: { sweetness: 85, richness: 75, chewiness: 100, creaminess: 85 },
    ingredients: [
      { name: "Raw Cassava Tapioca Pearls", amountPerServing: 50, unit: "g" },
      { name: "Fresh Organic Alpine Strawberries", amountPerServing: 100, unit: "g", note: "Hull and chop" },
      { name: "Pure Cane Sugar Syrup", amountPerServing: 25, unit: "ml" },
      { name: "Fresh Milk or Sweetened Condensed Milk", amountPerServing: 220, unit: "ml" },
      { name: "Strawberry Puree Compote", amountPerServing: 40, unit: "g", note: "Slow cooked with lemon juice" },
      { name: "Crushed Ice", amountPerServing: 150, unit: "g" },
    ],
    steps: [
      {
        step: 1,
        title: "Prepare Fresh Strawberry Compote",
        desc: "Muddle fresh Alpine strawberries with cane sugar and a squeeze of fresh lemon. Simmer on low heat for 8 minutes until a rich compote forms.",
      },
      {
        step: 2,
        title: "Cook Soft Tapioca Pearls",
        desc: "Boil tapioca pearls until chewy and soft. Coat in strawberry sugar syrup to infuse sweet berry flavor directly into the boba.",
      },
      {
        step: 3,
        title: "Layer Berry Compote & Pearls",
        desc: "Add warm boba pearls to the bottom of the glass followed by a generous layer of fresh strawberry compote around the glass sides.",
      },
      {
        step: 4,
        title: "Ice & Fresh Milk Pour",
        desc: "Add crushed ice and pour ice-cold sweet milk over the compote, creating a striking pink and white ombre effect.",
      },
      {
        step: 5,
        title: "Garnish with Fresh Strawberry Slice",
        desc: "Garnish glass rim with a fresh strawberry slice and mint leaf. Stir well before drinking!",
      },
    ],
    secretTip:
      "Muddle half the strawberries fresh right before serving to give your drink pops of natural fruit texture in every sip!",
  },
  blueberry: {
    prepTime: "12 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    calories: "340 kcal",
    profile: { sweetness: 75, richness: 80, chewiness: 100, creaminess: 90 },
    ingredients: [
      { name: "Raw Cassava Tapioca Pearls", amountPerServing: 50, unit: "g" },
      { name: "Wild Nordic Blueberries", amountPerServing: 90, unit: "g", note: "Fresh or frozen" },
      { name: "Wildflower Honey Syrup", amountPerServing: 30, unit: "ml" },
      { name: "Whole Cream Milk", amountPerServing: 200, unit: "ml" },
      { name: "Butterfly Pea Flower Tea (Optional)", amountPerServing: 30, unit: "ml", note: "For indigo galaxy layer" },
      { name: "Solid Ice Cubes", amountPerServing: 150, unit: "g" },
    ],
    steps: [
      {
        step: 1,
        title: "Craft Nordic Blueberry Reduction",
        desc: "Simmer wild Nordic blueberries with honey syrup over medium heat until berries burst into a deep violet reduction.",
      },
      {
        step: 2,
        title: "Cook & Glaze Tapioca Pearls",
        desc: "Boil tapioca pearls until elastic. Mix with blueberry reduction so the pearls absorb dark indigo tones.",
      },
      {
        step: 3,
        title: "Assemble Glass Base",
        desc: "Place glazed tapioca pearls and extra blueberry compote at the bottom of the glass.",
      },
      {
        step: 4,
        title: "Ice & Layer Creamy Milk",
        desc: "Fill glass with ice and pour cold cream milk. Option: float butterfly pea tea on top for a stunning multi-layer galaxy aesthetic.",
      },
      {
        step: 5,
        title: "Serve & Enjoy",
        desc: "Serve with a wide straw. Swirl together for a creamy, berry-infused boba experience.",
      },
    ],
    secretTip:
      "Using wild Nordic blueberries instead of cultivated blueberries gives double the antioxidants and an intense natural violet color without artificial dyes!",
  },
};

export const RecipeSection: React.FC<RecipeSectionProps> = ({
  activeFlavor,
  accentText,
  badgeStyle,
  cardBg,
  cardIcon,
}) => {
  const [servings, setServings] = useState<number>(2);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});

  const recipe = recipeData[activeFlavor];

  const toggleIngredient = (name: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section id="recipes" className="w-full my-12 text-left">
      {/* Recipe Header & Overview Banner */}
      <div className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl mb-12 ${cardBg} transition-all duration-700`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-8">
          <div>
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-[0.25em] mb-3 ${badgeStyle}`}>
              <Utensils size={14} />
              <span>Artisanal Recipe & Mixology Guide</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-amber-50 tracking-tight leading-tight">
              Mastering {recipeData[activeFlavor].prepTime ? activeFlavor.toUpperCase() : ""} Boba Tea
            </h2>
            <p className="text-sm font-sans text-amber-200/70 mt-2 max-w-2xl">
              Follow our step-by-step masterclass to craft authentic, coffeehouse-grade boba tea at home with zero artificial additives.
            </p>
          </div>

          {/* Action Buttons: Servings Switcher & Print */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 bg-black/40 border border-white/10 p-1.5 rounded-2xl">
              <span className="text-xs font-sans uppercase tracking-widest text-amber-200/60 px-2 flex items-center gap-1">
                <Users size={14} />
                <span>Yield:</span>
              </span>
              {[1, 2, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setServings(num)}
                  className={`px-3 py-1 rounded-xl text-xs font-mono font-medium transition-all ${
                    servings === num
                      ? "bg-amber-500 text-black shadow-md font-bold"
                      : "text-amber-200/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {num} {num === 1 ? "Cup" : "Cups"}
                </button>
              ))}
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/15 text-xs font-sans tracking-wider uppercase text-amber-100 hover:bg-white/15 transition-all"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Quick Recipe Info Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${cardIcon}`}>
              <Clock size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200/50">Prep Time</div>
              <div className="text-sm font-serif text-amber-100 font-semibold">{recipe.prepTime}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${cardIcon}`}>
              <Flame size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200/50">Cook Time</div>
              <div className="text-sm font-serif text-amber-100 font-semibold">{recipe.cookTime}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${cardIcon}`}>
              <ChefHat size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200/50">Difficulty</div>
              <div className="text-sm font-serif text-amber-100 font-semibold">{recipe.difficulty}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/30 border border-white/5 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${cardIcon}`}>
              <Gauge size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-amber-200/50">Calories</div>
              <div className="text-sm font-serif text-amber-100 font-semibold">{recipe.calories}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Recipe Content Grid: Ingredients & Flavor Profile (Left) | Preparation Steps (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Ingredients & Flavor Profile Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Ingredients Checklist */}
          <div className={`p-8 rounded-3xl border backdrop-blur-xl ${cardBg}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif text-amber-50 flex items-center gap-2">
                <Utensils size={18} className={accentText} />
                <span>Ingredients</span>
              </h3>
              <span className="text-xs font-mono text-amber-400/60 uppercase">
                Scaled for {servings} {servings === 1 ? "Serving" : "Servings"}
              </span>
            </div>

            <ul className="space-y-3">
              {recipe.ingredients.map((ing) => {
                const calculatedAmount = Math.round(ing.amountPerServing * servings * 10) / 10;
                const isChecked = checkedIngredients[ing.name];

                return (
                  <li
                    key={ing.name}
                    onClick={() => toggleIngredient(ing.name)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? "bg-white/5 border-white/10 opacity-50 line-through"
                        : "bg-black/20 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <CheckCircle2
                      size={18}
                      className={`mt-0.5 transition-colors ${
                        isChecked ? accentText : "text-white/20"
                      }`}
                    />
                    <div className="flex-1 text-xs sm:text-sm">
                      <span className="font-semibold text-amber-100 mr-1.5">
                        {calculatedAmount} {ing.unit}
                      </span>
                      <span className="text-amber-200/80 font-sans">{ing.name}</span>
                      {ing.note && (
                        <span className="block text-[11px] text-amber-400/60 italic font-sans mt-0.5">
                          * {ing.note}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Flavor Profile Bars */}
          <div className={`p-8 rounded-3xl border backdrop-blur-xl ${cardBg}`}>
            <h3 className="text-xl font-serif text-amber-50 mb-6 flex items-center gap-2">
              <Sparkles size={18} className={accentText} />
              <span>Sensory Flavor Profile</span>
            </h3>

            <div className="space-y-4 text-xs font-sans">
              <div>
                <div className="flex justify-between text-amber-200/80 mb-1.5">
                  <span>Sweetness</span>
                  <span className="font-mono text-amber-100">{recipe.profile.sweetness}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" style={{ width: `${recipe.profile.sweetness}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-amber-200/80 mb-1.5">
                  <span>Richness</span>
                  <span className="font-mono text-amber-100">{recipe.profile.richness}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" style={{ width: `${recipe.profile.richness}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-amber-200/80 mb-1.5">
                  <span>Boba Chewiness (Q Texture)</span>
                  <span className="font-mono text-amber-100">{recipe.profile.chewiness}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" style={{ width: `${recipe.profile.chewiness}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-amber-200/80 mb-1.5">
                  <span>Creaminess</span>
                  <span className="font-mono text-amber-100">{recipe.profile.creaminess}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" style={{ width: `${recipe.profile.creaminess}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preparation Steps & Secret Tips Column (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl ${cardBg}`}>
            <h3 className="text-2xl font-serif text-amber-50 mb-8 flex items-center gap-2">
              <ChefHat size={22} className={accentText} />
              <span>Step-by-Step Mixology Masterclass</span>
            </h3>

            <div className="space-y-8">
              {recipe.steps.map((st) => (
                <div key={st.step} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center text-sm font-mono font-bold shrink-0 ${cardIcon}`}>
                    {st.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-serif text-amber-100 mb-2">{st.title}</h4>
                    <p className="text-sm font-sans font-light text-amber-200/70 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secret Mixologist Tip Card */}
            <div className={`mt-10 p-6 rounded-2xl border ${cardIcon} flex items-start gap-4`}>
              <Sparkles size={24} className="shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs uppercase tracking-widest font-mono font-semibold mb-1">
                  Master Mixologist Secret Tip
                </h5>
                <p className="text-xs sm:text-sm font-sans font-light leading-relaxed opacity-90">
                  {recipe.secretTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
