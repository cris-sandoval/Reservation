import { create } from "zustand";

const useStore = create((set) => ({
    reservations: [],
    addReservation: (tienda, dates) =>
        set(state => ({
            reservations: [...state.reservations, {tienda, dates}]
        })  )
}))

export default useStore