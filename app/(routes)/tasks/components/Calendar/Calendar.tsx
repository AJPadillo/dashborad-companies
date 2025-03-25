"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

import multiMonth from '@fullcalendar/multimonth'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { DateSelectArg, EventContentArg } from '@fullcalendar/core/index.js'

import axios from 'axios';



import { CalendarProps } from "./Calendar.types";

export function Calendar(props: CalendarProps) {
    const { companies, events } = props
    return (
        <div>Calendar</div>
    )
}