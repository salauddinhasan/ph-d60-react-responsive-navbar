import React, { useEffect, useState } from "react";

const PricingOption = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const [isYearly, setIsYearly] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlans([
        {
          id: 1,
          title: "Starter",
          price: 0,
          yearlyPrice: 0,
          highlighted: false,
          features: ["3 Users", "5 Projects", "1GB Storage"],
        },

        {
          id: 2,
          title: "Pro",
          price: 29,
          yearlyPrice: 23,
          highlighted: true,
          features: ["20 Users", "Unlimited Projects", "50GB Storage"],
        },

        {
          id: 3,
          title: "Enterprise",
          price: 99,
          yearlyPrice: 79,
          highlighted: false,
          features: ["Unlimited Users", "500GB Storage", "24/7 Support"],
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (

      
    <div className="p-10">
        <div className="flex justify-center mb-10">
            <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Monthly</span>
                <input type="checkbox" className="toggle toggle-primary" onChange={() => setIsYearly(!isYearly)} />
                <span className="text-sm font-medium">Yearly</span>
                <span className="badge badge-success text-xs">Save 20% </span>
            </div>
        </div> 
         
         {
            loading ? (<p>loading.....</p>) : (
                <div className="flex justify-center gap-6 ">
                    {
                        plans.map(plan => (
                            <div key={plan.id} className="border 1px rounded-2xl w-full md:max-w-md p-6">
                                <h2>{plan.title}</h2>
                                <p>${isYearly ? plan.yearlyPrice : plan.price}</p>
                                 <ul className="space-y-2 mb-6">
                                    {
                                        plan.features.map(f => <li key={f}>
                                            ✅{f}
                                        </li>)
                                    }
                                 </ul>
                                 <button className="btn btn-primary">Get Started</button>
                            </div>
                        ))
                    }
                </div>
            )
         }

    </div>
  )
};

export default PricingOption;
