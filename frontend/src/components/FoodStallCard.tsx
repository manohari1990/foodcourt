import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export interface FoodStall {
  id: number;
  stall_name: string;
  stall_type: string
  status: string;
  display_order: number;
  stall_number: string;
  stall_logo: string;
  open_at: string;
  close_at: string;
  stall_image:string;
  contact_name: string;
  stall_area: string;
  discount: number;
}

interface FoodStallCardProps {
  stall: FoodStall;
}

const FoodStallCard = ({ stall }: FoodStallCardProps) => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-sm" >
      {/* <CardContent className="p-0"> */}
        <div className="flex flex-row sm:flex-col">
          {/* Image Section */}
          <div className="relative sm:w-48 h-48 sm:h-auto shrink-0" style={{ margin: '20px 60px'}}>
            <img
              src={stall.stall_image+'?w=400&h=300&fit=crop'}
              alt={stall.stall_name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{maxWidth:'300px'}}
            />
            <Badge
              className={`absolute top-3 left-3 ${
                isOpen
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
              style={{
                position:'absolute', 
                left:0, 
                backgroundColor: '#000',
                padding: '12px',
                marginTop: '5px',
                color: '#fff',
                fontWeight: 'bold'}}
            >
              {isOpen ? "Open" : "Closed"}
            </Badge>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-5 m-5">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {stall.stall_name}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-cuisine text-cuisine-foreground font-medium"
                >
                  {stall.stall_type}
                </Badge>
              </div>
              {/* <div className="text-right shrink-0">
                <div className="flex items-center gap-1 text-rating">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold text-foreground">
                    {stall.rating.toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {stall.reviewCount} reviews
                </p>
              </div> */}
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">{stall.stall_area}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{stall.open_at} - {stall.close_at}</span>
              </div>
            </div>

            {/* <div className="mt-4 pt-4 border-t border-border">
              <span className="text-sm font-medium text-foreground">
                {stall.discount}
              </span>
            </div> */}
          </div>

          <div className="flex-1 p-5 m-5">
            <Button
                variant={"outline"}
                size={"icon"}
                className={cn(
                  "absolute h-8 w-8 rounded-full",
                  
                )}
                onClick={()=>{

                }}
                // {...props}
              >
                Menu
              </Button>
          </div>
        </div>
      {/* </CardContent> */}
    </div>
  );
};

export default FoodStallCard;
