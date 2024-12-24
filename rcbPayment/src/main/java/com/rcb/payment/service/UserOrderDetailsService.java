package com.rcb.payment.service;

import com.rcb.payment.model.BookingDetails;
import com.rcb.payment.model.UserDetails;
import com.rcb.payment.repository.BookingDetailsRepository;
import com.rcb.payment.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserOrderDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private BookingDetailsRepository bookingDetailsRepository;

    public UserDetails saveUserDetails(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    public BookingDetails saveBookingDetails(BookingDetails bookingDetails) {
        return bookingDetailsRepository.save(bookingDetails);
    }
}
