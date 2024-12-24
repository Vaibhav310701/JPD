import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for each part of the state
interface Owner {
  name: string;
  phone_number: string;
}
interface Image {
  name: string;
  size: number;
  preview: string;
}

interface PropertyDetails {
  looking_to: string; // 'sale' or 'rent'
  property_type: string;
  selected_type: string;
  length: string;
  breadth: string;
  plot_area: string;
  selected_bhk: string;
  super_built_up_area: string;
  construction_area: string;
  carpet_area: string;
  description: string;
  price: string;
  rent_per_month: string;
  selected_approvals: string[];
}


interface LocationDetails {
  selected_facing: string;
  selected_road: string;
  selected_placing: string;
  latitude: string;
  longitude: string;
}

interface FormDataState {
  owner: Owner;
  property_details: PropertyDetails;
  location_details: LocationDetails;
  images: Image[];
}

// Initial state based on the provided structure
const initialState: FormDataState = {
  owner: {
    name: "",
    phone_number: "",
  },
  property_details: {
    looking_to: "", // 'sale' or 'rent'
    property_type: "",
    selected_type: "",
    length: "",
    breadth: "",
    plot_area: "",
    selected_bhk: "",
    super_built_up_area: "",
    construction_area: "",
    carpet_area: "",
    description: "",
    price: "",
    rent_per_month: "",
    selected_approvals: [],
  },
  location_details: {
    selected_facing: "",
    selected_road: "",
    selected_placing: "",
    latitude: "",
    longitude: "",
  },
  images: [],
};

// Slice definition
const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    // Set actions for all fields
    setOwnerName: (state, action: PayloadAction<string>) => {
      state.owner.name = action.payload;
    },
    setOwnerPhoneNumber: (state, action: PayloadAction<string>) => {
      state.owner.phone_number = action.payload;
    },
    setLookingTo: (state, action: PayloadAction<string>) => {
      state.property_details.looking_to = action.payload;
    },
    setPropertyType: (state, action: PayloadAction<string>) => {
      state.property_details.property_type = action.payload;
    },
    setSelectedType: (state, action: PayloadAction<string>) => {
      state.property_details.selected_type = action.payload;
    },
    setLength: (state, action: PayloadAction<string>) => {
      state.property_details.length = action.payload;
    },
    setBreadth: (state, action: PayloadAction<string>) => {
      state.property_details.breadth = action.payload;
    },
    setPlotArea: (state, action: PayloadAction<string>) => {
      state.property_details.plot_area = action.payload;
    },
    setSelectedBHK: (state, action: PayloadAction<string>) => {
      state.property_details.selected_bhk = action.payload;
    },
    setSuperBuiltUpArea: (state, action: PayloadAction<string>) => {
      state.property_details.super_built_up_area = action.payload;
    },
    setConstructionArea: (state, action: PayloadAction<string>) => {
      state.property_details.construction_area = action.payload;
    },
    setCarpetArea: (state, action: PayloadAction<string>) => {
      state.property_details.carpet_area = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.property_details.description = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.property_details.price = action.payload;
    },
    setRentPerMonth: (state, action: PayloadAction<string>) => {
      state.property_details.rent_per_month = action.payload;
    },
    setApprovalStatus: (state, action: PayloadAction<string[]>) => {
      state.property_details.selected_approvals = action.payload;
    },
    setSelectedFacing: (state, action: PayloadAction<string>) => {
      state.location_details.selected_facing = action.payload;
    },
    setSelectedRoad: (state, action: PayloadAction<string>) => {
      state.location_details.selected_road = action.payload;
    },
    setSelectedPlacing: (state, action: PayloadAction<string>) => {
      state.location_details.selected_placing = action.payload;
    },
    setLongitude: (state, action: PayloadAction<string>) => {
      state.location_details.longitude = action.payload;
    },
    setLatitude: (state, action: PayloadAction<string>) => {
      state.location_details.latitude = action.payload;
    },
    addImages: (state, action: PayloadAction<Image[]>) => {
      state.images.push(...action.payload);
    },
    
    removeImage: (state, action: PayloadAction<number>) => {
      state.images.splice(action.payload, 1);
    },
    resetFormData: () => initialState, // Reset the form data to initial state
  },
});

// Export actions to be used in components
export const {
  setOwnerName,
  setOwnerPhoneNumber,
  setLookingTo,
  setPropertyType,
  setSelectedType,
  setBreadth,
  setLength,
  setPlotArea,
  setSelectedBHK,
  setSuperBuiltUpArea,
  setConstructionArea,
  setCarpetArea,
  setDescription,
  setPrice,
  setRentPerMonth,
  setApprovalStatus,
  setSelectedFacing,
  setSelectedRoad,
  setSelectedPlacing,
  setLongitude,
  setLatitude,
  addImages,
  removeImage,
  resetFormData,
} = formDataSlice.actions;

// Export the reducer to be used in the store
export default formDataSlice.reducer;
