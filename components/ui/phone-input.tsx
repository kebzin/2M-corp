"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface PhoneInputProps
  extends Omit<React.ComponentProps<"input">, "onChange"> {
  defaultCountry?: string;
  onCountryChange?: (country: string) => void;
  onChange?: (value: string) => void;
}

const countries = [
  { code: "GM", dialCode: "+220", flag: "🇬🇲", name: "The Gambia" },
  { code: "NG", dialCode: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "GH", dialCode: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "SN", dialCode: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "US", dialCode: "+1", flag: "🇺🇸", name: "United States" },
  { code: "GB", dialCode: "+44", flag: "🇬🇧", name: "United Kingdom" },
];

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    { className, defaultCountry = "GM", onCountryChange, onChange, ...props },
    ref
  ) => {
    const [selectedCountry, setSelectedCountry] =
      React.useState(defaultCountry);
    const selectedCountryData = countries.find(
      (c) => c.code === selectedCountry
    );

    const handleCountryChange = (countryCode: string) => {
      setSelectedCountry(countryCode);
      onCountryChange?.(countryCode);
    };

    return (
      <div className="relative flex w-full">
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="absolute left-3 top-1/2 z-10 h-auto w-auto -translate-y-1/2 border-0 bg-transparent p-0 hover:bg-transparent focus:ring-0 focus:ring-offset-0">
            <SelectValue>
              <div className="flex items-center gap-1.5">
                <span className="text-lg">{selectedCountryData?.flag}</span>
                <span className="text-sm font-medium">
                  {selectedCountryData?.dialCode}
                </span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className="flex items-center gap-2">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm">{country.dialCode}</span>
                  <span className="text-sm text-muted-foreground">
                    {country.name}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          type="tel"
          className={cn("w-full pl-24", className)}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
