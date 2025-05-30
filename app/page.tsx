"use client";

import "./globals.css";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BadgeDollarSign, Home, Hotel } from "lucide-react";

export default function GoSitMe() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          GoSitMe: Help Jared Escape the Void
        </h1>
        <p className="text-center max-w-xl text-lg mb-8">
          For just $99 a night, you can rescue Jared from the soul-crushing silence of
          a furniture-free apartment. He's currently marooned on bare floors,
          trying to make eye contact with the wall. Let’s put an end to the madness.
        </p>

        <Card className="max-w-xl w-full mb-6 shadow-md rounded-lg bg-white">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <Home className="w-8 h-8 text-gray-700" />
              <p className="text-md">
                <strong>Status:</strong> 3 days left of absolute nothingness.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Hotel className="w-8 h-8 text-gray-700" />
              <p className="text-md">
                <strong>Goal:</strong> One cozy hotel room, ideally with snacks.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <BadgeDollarSign className="w-8 h-8 text-gray-700" />
              <p className="text-md">
                <strong>Raised:</strong> $0 — not even a vending machine budget yet.
              </p>
            </div>
          </CardContent>
        </Card>

        <Button className="text-lg px-6 py-4 text-white bg-green-600 hover:bg-green-700">
          Donate Now — Save a Butt from the Floor
        </Button>

        <p className="text-sm text-gray-500 mt-6 max-w-md text-center">
          100% of your donation goes directly to securing a hotel with a real bed,
          working TV, and maybe even a mini-fridge. No admin fees. No fluff. Just mercy.
        </p>

        <Card className="max-w-xl w-full mb-6 shadow-md rounded-lg bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-bold mb-2">🏆 Tiered Rewards</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>$5</strong> – Jared sends you a telepathic thank-you from the void.</li>
              <li><strong>$15</strong> – We throw in a single throw pillow. Yes, just one.</li>
              <li><strong>$25</strong> – Pillow fort fund initiated. You get a blurry photo of it.</li>
              <li><strong>$50</strong> – Jared gets snacks. You get a Snack Review email.</li>
              <li><strong>$99</strong> – One night of hotel comfort. You get Jared’s eternal gratitude and maybe a TikTok dance of joy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="max-w-xl w-full mb-6 shadow-md rounded-lg bg-white">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-bold mb-2">💸 Recent Donors</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>Mom</strong>: $10 — “Get a chair.”</li>
              <li><strong>Greg from Work</strong>: $5 — “I’ve been there bro. Stay strong.”</li>
              <li><strong>Mystery Donor</strong>: $25 — “I believe in the pillow fort dream.”</li>
              <li><strong>Uncle Ray</strong>: $1 — “Use this wisely.”</li>
              <li><strong>Neighbor’s Dog</strong>: $3 — “Woof. You deserve better.”</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
