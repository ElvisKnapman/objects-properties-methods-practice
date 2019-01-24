let restaurant = {
    name: 'TGB',
    guestCapacity: 120,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },

    seatParty: function(partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount += partySize;
            return `${partySize} guests have been seated. ${this.guestCapacity - this.guestCount} seats remaining`;
        } else {
            return `Sorry, unable to seat ${partySize} guests. We only have ${this.guestCapacity - this.guestCount} seats remaining`;
        }
    },

    removeParty: function(partySize) {
        if(this.guestCount >= partySize) {
            this.guestCount -= partySize;
            return `${partySize} guests removed. ${this.guestCapacity - this.guestCount} seats remaining.`;
        } else {
            return `Error: Party size too large. There are currently ${this.guestCount} total guests, you tried to remove ${partySize} guests.`;
        }
    }
}

let status = restaurant.checkAvailability(4);

console.log(restaurant.seatParty(119));
console.log(restaurant.removeParty(120));
console.log(restaurant);
