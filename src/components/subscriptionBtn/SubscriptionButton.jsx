import { useState } from 'react';
import { Button } from '../ui/button';

export default function SubscriptionButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleClickOutside = (event) => {
        if (event.target.id !== 'subscription-button') {
            setIsOpen(false);
            setSelectedPlan(null);
        }
    };

    return (
        <div onClick={handleClickOutside}>
            <Button id="subscription-button" onClick={() => setIsOpen(!isOpen)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Subscription
            </Button>
            {isOpen && (
                <div className="mt-2">
                    <Button onClick={() => setSelectedPlan('Weekly Planner')} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${selectedPlan === 'Weekly Planner' ? 'opacity-50' : ''}`}>
                        Weekly Planner
                    </Button>
                    <Button onClick={() => setSelectedPlan('Monthly Planner')} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${selectedPlan === 'Monthly Planner' ? 'opacity-50' : ''}`}>
                        Monthly Planner
                    </Button>
                </div>
            )}
        </div>
    );
}
