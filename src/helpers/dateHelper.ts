import * as moment from 'moment';

class DateHelper {
    private _date: moment.Moment;
    private _isUtc: boolean = false;

    constructor(
        dateObject: any = undefined, 
        dateFormat: string = undefined, 
        utc: boolean = false, 
        strict: boolean = false
    ) {
        this._isUtc = utc;
        if (dateObject) {
            if (utc) {
                this._date = moment.utc(dateObject, dateFormat, strict);
            } else {
                this._date = moment(dateObject, dateFormat, strict);
            }
        }
        return this;
    }

    public get IsDateHelper() {
        return true;
    }

    public UtcNow(): DateHelper {
        this._date = moment.utc();
        return this;
    }

    public Parse(dateString: string): DateHelper {
        this._date = moment(dateString);
        return this;
    }

    public Yesterday(returnNewDate: boolean = true): DateHelper {
        return this.Subtract('days', 1, returnNewDate);
    }

    public Tomorrow(returnNewDate: boolean = true): DateHelper {
        return this.Add('days', 1, returnNewDate);
    }

    public NexWeek(returnNewDate: boolean = true): DateHelper {
        return this.Add('weeks', 1, returnNewDate);
    }

    public LastWeek(returnNewDate: boolean = true): DateHelper {
        return this.Subtract('weeks', 1, returnNewDate);
    }

    public LastMonth(returnNewDate: boolean = true): DateHelper {
        return this.Subtract('months', 1, returnNewDate);
    }

    public NextYear(returnNewDate: boolean = true): DateHelper {
        return this.Add('years', 1, returnNewDate);
    }

    public LastYear(returnNewDate: boolean = true): DateHelper {
        return this.Subtract('years', 1, returnNewDate);
    }

    public Add(
        duration: moment.unitOfTime.DurationConstructor, 
        amount: number, 
        returnNewDate: boolean = false
    ): DateHelper {
        if (returnNewDate) {
            return new DateHelper(this._date).Add(duration, amount);
        }
        this._date.add(duration, amount);
        return this;
    }

    public Subtract(
        duration: moment.unitOfTime.DurationConstructor, 
        amount: number, 
        returnNewDate: boolean = false
    ): DateHelper {
        if (returnNewDate) {
            return new DateHelper(this._date).Subtract(duration, amount);
        }
        this._date.subtract(duration, amount);
        return this;
    }

    public StartOf(
        unitOfTime: moment.unitOfTime.StartOf, 
        returnNewDate: boolean = false, 
        format: boolean = false
    ): DateHelper {
        if (format) {
            this._date.local().format();
        }
        if (returnNewDate) {
            return new DateHelper(this._date).StartOf(unitOfTime);
        }
        this._date.startOf(unitOfTime);
        return this;
    }

    public EndOf(
        unitOfTime: moment.unitOfTime.StartOf, 
        returnNewDate: boolean = false, 
        format: boolean = false
    ): DateHelper {
        if (format) {
            this._date.local().format();
        }
        if (returnNewDate) {
            return new DateHelper(this._date).EndOf(unitOfTime);
        }
        
        this._date.endOf(unitOfTime);
        return this;
    }

    public ToDate(): Date {
        if (this._date) {
            return this._date.toDate();
        }
    }

    public ToDateString(): string {
        if (this._date) {
            return this._date.format('YYYY-MM-DD[T]HH:mm:ssZZ');
        }
        return null;
    }

    public GetTime(): any {
        return this._date.toDate().getTime();
    }

    public ToDisplayString(
        format?: string, 
        returnDefaultText: boolean = true
    ): string {
        var formatToUse: string = format || 'Do MMM YYYY';
        if (this._date) {
            if (this._isUtc) {
                return moment(this._date.toDate()).format(formatToUse);
            }
            return this._date.format(formatToUse);
        } else {
            if (returnDefaultText) {
                return '-';
            }
            return '';
        }
    }

    public Day(): number {
        return this._date.date();
    }

    public Month(): number {
        return this._date.month() + 1;
    }

    public Year(): number {
        return this._date.year();
    }

    public Valid(): boolean {
        if (this._date) {
            return this._date.isValid();
        }
        return false;
    }

    public ValueOf(): number {
        if (this._date) {
            return this._date.valueOf();
        } else {
            return;
        }
    }

    public IsWithinRange(dateFrom: DateHelper, dateTo: DateHelper): boolean {
        var valueOfDate = this.ValueOf();
        return ((valueOfDate >= dateFrom.ValueOf()) 
            && (valueOfDate <= dateTo.ValueOf()));
    }

    public SetTime(time: string): void {
        var sections: string[] = time.split(' ');
        var timeSections: string[] = sections[0].split(':');
        var hours: number = parseInt(timeSections[0]);
        var minutes: number = parseInt(timeSections[1]);
        var meridiem: string = sections[1] ? sections[1].toLowerCase() : '';
        if (meridiem === 'pm' && hours < 12) {
            hours += 12;
        }

        this._date.hours(hours);
        this._date.minutes(minutes);
    }

    public SetTimeNow(): DateHelper {
        var now = moment();
        this._date.hours(now.hours());
        this._date.minutes(now.minutes());
        this._date.seconds(now.seconds());
        return this;
    }

    public IsToday(): boolean {
        return moment().diff(this._date, 'days') === 0;
    }

    public Difference(
        dateToTest: DateHelper, 
        qualifier: moment.unitOfTime.DurationConstructor
    ): number {
        return this._date.diff(moment(dateToTest.ToDate()), qualifier);
    }
}

export default DateHelper;
