package com.rcb.payment.controller;



import com.rcb.payment.model.BookingDetails;
import com.rcb.payment.model.UserDetails;
import lombok.Data;

@Data
public class UserOrderDto {
    private UserDetails userDetails;
    private BookingDetails bookingDetails;
}