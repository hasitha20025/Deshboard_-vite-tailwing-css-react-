import group_1 from "./assets/Group 3-1.svg";
import group_2 from "./assets/Group 3-2.svg";
import group_3 from "./assets/Group 3-3.svg";
import pluse from "./assets/Group+.svg";
import dot_3 from "./assets/Group-dot-3.svg";
import grocery from "./assets/grocery.svg";
import Transportation from "./assets/Transportation.svg";
import Housing from "./assets/Housing.svg";
import food_and_drink from "./assets/Food and Drink.svg";
import Entertainment from "./assets/Entertainment.svg";



export default function Expenses() {
  return (
    <>
      <div class="w-2/4 bg-white mt-10 mx-20">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <h1 className="text-3xl font-bold">Expenses</h1>
            <p className="text-xs text-slate-400 my-3">01 - 25 March, 2020</p>
          </div>
          <div className="basis-1/2 ">
            <div className=" flex -space-x-2 overflow-hidden justify-end">
              <img src={group_1} className="h-8 w-8" alt="group-photo-1" />
              <img src={group_2} className="h-8 w-8" alt="group-photo-2" />
              <img src={group_3} className="h-8 w-8" alt="group-photo-3" />
              <img
                src={pluse}
                className="h-15 w-11 pl-4"
                alt="group-plus-icon"
              />
            </div>
          </div>
        </div>

        <div class="flex gap-1  mt-5">
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
          <div class="w-4 h-20 bg-blue-500 py-2"></div>
          <div class="w-4 h-20 bg-blue-300 py-2"></div>
        </div>

        <div className="flex flex-row mt-2">
          <div className="basis-1/2">
            <p className="font-medium">Today</p>
          </div>
          <div className="basis-1/2 ">
            <div className="flex justify-end">
              <img src={dot_3} className="mt-3" alt="..." />
            </div>
          </div>
          <hr class="h-0.5 border-t-2 bg-black" />
        </div>

        <div className="flex py-3 ">
          <div className="flex-none">
            <img src={grocery} alt="grocery-icon" />
          </div>
          <div className="flex-auto ml-4">
            <p className="font-medium">Grocery</p>
            <p className="text-slate-400">5:12 pm • Belanja di pasar</p>
          </div>
          <div className="flex-auto flex justify-end">
            <p className="font-medium">-326.800</p>
          </div>
        </div>

        <div className="flex py-3 ">
          <div className="flex-none">
            <img src={Transportation} alt="grocery-icon" />
          </div>
          <div className="flex-auto ml-4">
            <p className="font-medium">Transportation</p>
            <p className="text-slate-400">5:12 pm  •  Naik bus umum</p>
          </div>
          <div className="flex-auto flex justify-end">
            <p className="font-medium">-15.000</p>
          </div>
        </div>

        <div className="flex py-3 ">
          <div className="flex-none">
            <img src={Housing} alt="grocery-icon" />
          </div>
          <div className="flex-auto ml-4">
            <p className="font-medium">Housing</p>
            <p className="text-slate-400">5:12 pm  •  Bayar Listrik</p>
          </div>
          <div className="flex-auto flex justify-end">
            <p className="font-medium">-185.750</p>
          </div>
        </div>


        <div className="flex flex-row mt-10">
          <div className="basis-1/2">
            <p className="font-medium" >Monday, 23 March 2020</p>
          </div>
          <div className="basis-1/2 ">
            <div className="flex justify-end">
              <img src={dot_3} className="mt-3" alt="..." />
            </div>
          </div>
          <hr class="border border-black mt-4 mb-4" />
        </div>


        <div className="flex py-3 ">
          <div className="flex-none">
            <img src={food_and_drink} alt="grocery-icon" />
          </div>
          <div className="flex-auto ml-4">
            <p className="font-medium">Food and Drink</p>
            <p className="text-slate-400">5:12 pm  •  Makan Steak</p>
          </div>
          <div className="flex-auto flex justify-end">
            <p className="font-medium">-156.000</p>
          </div>
        </div>


        <div className="flex py-3 ">
          <div className="flex-none">
            <img src={Entertainment} alt="grocery-icon" />
          </div>
          <div className="flex-auto ml-4">
            <p className="font-medium">Entertainment</p>
            <p className="text-slate-400">5:12 pm  •  Nonton Bioskop</p>
          </div>
          <div className="flex-auto flex justify-end">
            <p className="font-medium">-35.200</p>
          </div>
        </div>







      </div>






      <div class="w-1/4 bg-slate-100">
        Right Part Content
      </div>
    </>
  );
}
