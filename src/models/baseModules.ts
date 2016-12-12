import * as _ from 'lodash';
import DateHelper from "../helpers/DateHelper";

export module Enums {
   export enum GroupSearchType {
        Groups = 0,
        Companies = 1,
        Teams = 2
   }

   export enum DateInterval {
        Second = 0,
        Minute = 1,
        Hour = 2,
        BiDaily = 3,
        Day = 4,
        Week = 5,
        Month = 6,
        Quarter = 7,
        Year = 8
   }

   export enum Frequency {
        Daily = 1,
        Weekly = 2,
        Monthly = 4,
        Quarterly = 8,
        Yearly = 16,
        EveryWeekDay = 32
   }

   export enum MonthlyInterval {
        First = 1,
        Second = 2,
        Third = 4,
        Fourth = 8,
        Last = 16,
        EveryWeek = 31
   }

   export enum DayOfWeek {
        Sun = 1,
        Mon = 2,
        Tue = 4,
        Wed = 8,
        Thu = 16,
        Fri = 32,
        Sat = 64
   }

   export enum Quarter {
        First = 1,
        Second = 2,
        Third = 4,
        Fourth = 8
   }

   export enum QuarterlyInterval {
        First = 1,
        Second = 2,
        Last = 4
   }

   export enum EventWidgetConfigDate {
        None = 0,
        Due = 1,
        Created = 2
   }

   export enum GroupWidgetConfigDate {
        None = 0,
        Created = 1,
        LastContacted = 2
   }

   export enum PropertyWidgetConfigDate {
        None = 0,
        Exchange = 1,
        Completion = 2,
        OfferAccepted = 3,
        Instructed = 4
   }

   export enum ChainItemDirection {
        Up = 0,
        Down = 1
   }

   export enum ListOrder {
        Descending = 0,
        Ascending = 1
   }

   export enum MatchType {
        Sales = 0,
        Lettings = 1
   }

   export enum GroupListSort {
        None = 0,
        CreatedDate = 1
   }

   export enum EventListSortType {
        OfferDate = 0,
        OffersPerProperty = 1
   }

   export enum ListContext {
        My = 0,
        Branch = 1,
        Agency = 2
   }

   export enum PropertyListSort {
        AcceptedPrice = 0,
        Price = 1,
        Bedrooms = 2,
        Viewings = 3,
        Offers = 4,
        Distance = 5,
        ValuationDate = 6
   }

   export enum GroupInterestListSort {
        None = 0,
        CreatedDate = 1
   }

   export enum TodoListSort {
        None = 0,
        DueDate = 1
   }

   export enum ReportFacet {
        ValuationsBooked = 0,
        ValuationsAttended = 1,
        Instructions = 2,
        NetPropertiesListed = 3,
        WithdrawnInstructions = 4,
        Reductions = 5,
        FallenThrough = 6,
        AverageTimeToInstruction = 7,
        OffersReceived = 8,
        GrossSalesAgreed = 9,
        AverageTimeToSell = 10,
        PropertiesExchanged = 11,
        AverageTimeToExchange = 12,
        AverageCompletionMarketPrice = 13,
        AverageCompletionFee = 14,
        AverageCompletionFeePercentage = 15,
        PropertiesCompleted = 16,
        PropertiesCompletedMarketValue = 17,
        TotalCompletionFees = 18,
        AverageTimeToCompletion = 19,
        WithdrawalRate = 20,
        SalesCompleted = 21,
        MovedIntoOccupation = 22,
        ViewingsCompleted = 23,
        ViewingsBooked = 24,
        CallsMade = 25,
        ApplicantsRegistered = 26,
        OffersReceivedAggregatedByGroup = 27,
        AverageInstructedFeePercentage = 28,
        TotalInstructedFees = 29,
        AverageExchangedFeePercentage = 30,
        TotalExchangedFees = 31,
        AverageOfferAcceptedFeePercentage = 32,
        TotalOfferAcceptedFees = 33,
        IncompleteAppointments = 34
   }

   export enum ReportCsvOrder {
        ReportNumber = 0,
        OrderSent = 1
   }

   export enum ChartReportFacet {
        OriginTotals = 0,
        OriginTotalsSales = 1,
        OriginTotalsLettings = 2,
        OriginTotalsVendors = 3,
        OriginTotalsLandlords = 4
   }

}
export module Dezrez.System {

   export class BaseDataContract {
      Id: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
         }
   }


   export class EnumDataContract {
      Id: number;
      Name: string;
      SystemName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.SystemName = jsonData.SystemName;
         }
   }


   export class BaseQueryDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CreatedDate = new DateHelper(jsonData.CreatedDate, null, true);
            this.CreatedBy = new Dezrez.People.Query.Get.CreatedByDataContract(jsonData.CreatedBy);
         }
   }


   export class OrderedTagDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Order = jsonData.Order;
         }
   }


   export class TagDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      SystemStatusName: string;
      TagType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.SystemStatusName = jsonData.SystemStatusName;
            this.TagType = new Dezrez.System.EnumDataContract(jsonData.TagType);
         }
   }


   export class BaseCustomFieldsDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var customFieldsTempArray = _.map(jsonData.CustomFields, item => { return new Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract(item);  });
            this.CustomFields = <Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract[]>customFieldsTempArray;

         }
   }


   export class ConcurrenyErrorDataContract {
      Message: string;
      ErrorReference: string;
      Details: string;
      Entity: string;
      Id: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Message = jsonData.Message;
            this.ErrorReference = jsonData.ErrorReference;
            this.Details = jsonData.Details;
            this.Entity = jsonData.Entity;
            this.Id = jsonData.Id;
         }
   }


   export class SettingDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Value: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }


   export class LegacyItemDataContract {
      SourceId: number;
      SourceName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SourceId = jsonData.SourceId;
            this.SourceName = jsonData.SourceName;
         }
   }


   export class ApiErrorDataContract {
      Message: string;
      ErrorReference: string;
      Details: string;
      OwningTeam: Dezrez.Security.Query.Get.OwnerDataContract;
      ErrorType: string;
      ValidationErrors: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Message = jsonData.Message;
            this.ErrorReference = jsonData.ErrorReference;
            this.Details = jsonData.Details;
            this.OwningTeam = new Dezrez.Security.Query.Get.OwnerDataContract(jsonData.OwningTeam);
            this.ErrorType = jsonData.ErrorType;
            this.ValidationErrors = (<string[]>jsonData.ValidationErrors);
         }
   }

}

export module Dezrez.Security.Command.Save {

   export class SaveTeamSecurityPermissionDataContract {
      Id: number;
      Name: string;
      TeamId: number;
      AppliesToTeamId: number;
      AccessType: Dezrez.System.EnumDataContract;
      EntityType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.TeamId = jsonData.TeamId;
            this.AppliesToTeamId = jsonData.AppliesToTeamId;
            this.AccessType = new Dezrez.System.EnumDataContract(jsonData.AccessType);
            this.EntityType = new Dezrez.System.EnumDataContract(jsonData.EntityType);
         }
   }

}

export module Dezrez.Security.Query.Get {

   export class OwnerDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class TeamSecurityPermissionDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Team: Dezrez.Security.Query.Get.TeamSecurityTeamDataContract;
      AppliesTo: Dezrez.Security.Query.Get.TeamSecurityTeamDataContract;
      AccessType: Dezrez.System.EnumDataContract;
      EntityType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Team = new Dezrez.Security.Query.Get.TeamSecurityTeamDataContract(jsonData.Team);
            this.AppliesTo = new Dezrez.Security.Query.Get.TeamSecurityTeamDataContract(jsonData.AppliesTo);
            this.AccessType = new Dezrez.System.EnumDataContract(jsonData.AccessType);
            this.EntityType = new Dezrez.System.EnumDataContract(jsonData.EntityType);
         }
   }


   export class TeamSecurityTeamDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class TeamSecurityDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      TeamId: number;
      BranchAccesses: Array<Dezrez.Security.Query.Get.TeamSecurityPermissionDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.TeamId = jsonData.TeamId;
            var branchAccessesTempArray = _.map(jsonData.BranchAccesses, item => { return new Dezrez.Security.Query.Get.TeamSecurityPermissionDataContract(item);  });
            this.BranchAccesses = <Dezrez.Security.Query.Get.TeamSecurityPermissionDataContract[]>branchAccessesTempArray;

         }
   }

}

export module Dezrez.GlobalSearch.Query {

   export class BaseGlobalDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      LastUpdated: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.LastUpdated = new DateHelper(jsonData.LastUpdated, null, true);
         }
   }


   export class GlobalSearchDataContractBase {
      Term: string;
      PageSize: number;
      PageNumber: number;
      BranchId: number;
      GroupTypes: Array<Enums.GroupSearchType>;
      ExcludeDeleted: boolean;
      LastUpdated: DateHelper;
      ServiceType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Term = jsonData.Term;
            this.PageSize = jsonData.PageSize;
            this.PageNumber = jsonData.PageNumber;
            this.BranchId = jsonData.BranchId;
            this.GroupTypes = jsonData.GroupTypes;
            this.ExcludeDeleted = jsonData.ExcludeDeleted;
            this.LastUpdated = new DateHelper(jsonData.LastUpdated, null, true);
            this.ServiceType = jsonData.ServiceType;
         }
   }


   export class GlobalSearchResponseDataContract {
      Groups: any;
      Companies: any;
      People: any;
      Properties: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Groups = jsonData.Groups;
            this.Companies = jsonData.Companies;
            this.People = jsonData.People;
            this.Properties = jsonData.Properties;
         }
   }


   export class GlobalSuggestDataContract {
      Id: string;
      Name: string;
      Type: string;
      Source: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.Type = jsonData.Type;
            this.Source = jsonData.Source;
         }
   }

}

export module Dezrez.GlobalSearch.Query.People {

   export class GlobalSearchPersonResultDataContract extends Dezrez.GlobalSearch.Query.BaseGlobalDataContract {
      LastUpdated: DateHelper;
      Title: string;
      FirstName: string;
      LastName: string;
      Telephones: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      Emails: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      GroupCount: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      Gender: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            var telephonesTempArray = _.map(jsonData.Telephones, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.Telephones = <Dezrez.People.Query.Get.ContactItemDataContract[]>telephonesTempArray;

            var emailsTempArray = _.map(jsonData.Emails, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.Emails = <Dezrez.People.Query.Get.ContactItemDataContract[]>emailsTempArray;

            this.GroupCount = jsonData.GroupCount;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
         }
   }


   export class GlobalSearchPeopleDataContract extends Dezrez.GlobalSearch.Query.GlobalSearchDataContractBase {
      Term: string;
      PageSize: number;
      PageNumber: number;
      BranchId: number;
      GroupTypes: Array<Enums.GroupSearchType>;
      ExcludeDeleted: boolean;
      LastUpdated: DateHelper;
      ServiceType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }

}

export module Dezrez.GlobalSearch.Query.Groups {

   export class GlobalSearchGroupMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      FirstName: string;
      LastName: string;
      Telephones: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      Emails: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      Gender: Dezrez.System.EnumDataContract;
      DisplayAddress: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            var telephonesTempArray = _.map(jsonData.Telephones, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.Telephones = <Dezrez.People.Query.Get.ContactItemDataContract[]>telephonesTempArray;

            var emailsTempArray = _.map(jsonData.Emails, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.Emails = <Dezrez.People.Query.Get.ContactItemDataContract[]>emailsTempArray;

            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.DisplayAddress = jsonData.DisplayAddress;
         }
   }


   export class GlobalSearchGroupResultDataContract extends Dezrez.GlobalSearch.Query.BaseGlobalDataContract {
      LastUpdated: DateHelper;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      Members: Array<Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupMemberDataContract>;
      PrimaryMemberId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      CompanyServiceTypes: Array<string>;
      SystemStatus: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupMemberDataContract(item);  });
            this.Members = <Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupMemberDataContract[]>membersTempArray;

            this.PrimaryMemberId = jsonData.PrimaryMemberId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.CompanyServiceTypes = (<string[]>jsonData.CompanyServiceTypes);
            this.SystemStatus = new Dezrez.System.EnumDataContract(jsonData.SystemStatus);
         }
   }


   export class GlobalSearchGroupsDataContract extends Dezrez.GlobalSearch.Query.GlobalSearchDataContractBase {
      Term: string;
      PageSize: number;
      PageNumber: number;
      BranchId: number;
      GroupTypes: Array<Enums.GroupSearchType>;
      ExcludeDeleted: boolean;
      LastUpdated: DateHelper;
      ServiceType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }

}

export module Dezrez.GlobalSearch.Query.Property {

   export class GlobalSearchPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
         }
   }


   export class GlobalSearchMarketingRoleDataContract extends Dezrez.GlobalSearch.Query.BaseGlobalDataContract {
      LastUpdated: DateHelper;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      SummaryTextDescription: string;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      CreatedDate: DateHelper;
      ExchangedPrice: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      OfferAcceptedPrice: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.DefaultPicture = new Dezrez.Media.DocumentDataContract(jsonData.DefaultPicture);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.SummaryTextDescription = jsonData.SummaryTextDescription;
            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            this.CreatedDate = new DateHelper(jsonData.CreatedDate, null, true);
            this.ExchangedPrice = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.ExchangedPrice);
            this.OfferAcceptedPrice = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.OfferAcceptedPrice);
         }
   }


   export class GlobalSearchPropertiesDataContract extends Dezrez.GlobalSearch.Query.GlobalSearchDataContractBase {
      Term: string;
      PageSize: number;
      PageNumber: number;
      BranchId: number;
      GroupTypes: Array<Enums.GroupSearchType>;
      ExcludeDeleted: boolean;
      LastUpdated: DateHelper;
      ServiceType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class GlobalSearchPrimaryGroupMemberDataContract {
      Id: number;
      GroupId: number;
      Title: string;
      Name: string;
      EmailAddress: Dezrez.People.Query.Get.ContactItemDataContract;
      Telephone: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.GroupId = jsonData.GroupId;
            this.Title = jsonData.Title;
            this.Name = jsonData.Name;
            this.EmailAddress = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.EmailAddress);
            this.Telephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.Telephone);
         }
   }


   export class GlobalSearchPropertyResultDataContract extends Dezrez.GlobalSearch.Query.BaseGlobalDataContract {
      LastUpdated: DateHelper;
      PrimaryGroupMember: Dezrez.GlobalSearch.Query.Property.GlobalSearchPrimaryGroupMemberDataContract;
      Property: Dezrez.GlobalSearch.Query.Property.GlobalSearchPropertyDataContract;
      Roles: Array<Dezrez.GlobalSearch.Query.Property.GlobalSearchMarketingRoleDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PrimaryGroupMember = new Dezrez.GlobalSearch.Query.Property.GlobalSearchPrimaryGroupMemberDataContract(jsonData.PrimaryGroupMember);
            this.Property = new Dezrez.GlobalSearch.Query.Property.GlobalSearchPropertyDataContract(jsonData.Property);
            var rolesTempArray = _.map(jsonData.Roles, item => { return new Dezrez.GlobalSearch.Query.Property.GlobalSearchMarketingRoleDataContract(item);  });
            this.Roles = <Dezrez.GlobalSearch.Query.Property.GlobalSearchMarketingRoleDataContract[]>rolesTempArray;

         }
   }

}

export module Dezrez.Location {

   export class BaseAddressDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      AddressSource: Dezrez.System.EnumDataContract;
      SourceId: string;
      OrganizationName: string;
      Number: string;
      BuildingName: string;
      Street: string;
      Town: string;
      Locality: string;
      County: string;
      Postcode: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AddressSource = new Dezrez.System.EnumDataContract(jsonData.AddressSource);
            this.SourceId = jsonData.SourceId;
            this.OrganizationName = jsonData.OrganizationName;
            this.Number = jsonData.Number;
            this.BuildingName = jsonData.BuildingName;
            this.Street = jsonData.Street;
            this.Town = jsonData.Town;
            this.Locality = jsonData.Locality;
            this.County = jsonData.County;
            this.Postcode = jsonData.Postcode;
         }
   }


   export class BasePoiDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      PrimaryType: Dezrez.System.EnumDataContract;
      Types: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.PrimaryType = new Dezrez.System.EnumDataContract(jsonData.PrimaryType);
            var typesTempArray = _.map(jsonData.Types, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Types = <Dezrez.System.EnumDataContract[]>typesTempArray;

         }
   }

}

export module Dezrez.Location.Query {

   export class ViewPointDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Point: Dezrez.Location.Query.PointDataContract;
      Pitch: number;
      Heading: number;
      FieldOfVision: number;
      Zoom: number;
      Label: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Point = new Dezrez.Location.Query.PointDataContract(jsonData.Point);
            this.Pitch = jsonData.Pitch;
            this.Heading = jsonData.Heading;
            this.FieldOfVision = jsonData.FieldOfVision;
            this.Zoom = jsonData.Zoom;
            this.Label = jsonData.Label;
         }
   }


   export class PointDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Latitude: number;
      Longitude: number;
      Altitude: number;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.Altitude = jsonData.Altitude;
            this.Order = jsonData.Order;
         }
   }


   export class FavouriteRegionDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Title: string;
      RegionId: number;
      GlobalRegion: boolean;
      Agency: Dezrez.Agency.Query.Get.AgencyReferenceDataContract;
      Branch: Dezrez.Branch.Query.Get.BranchReferenceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Title = jsonData.Title;
            this.RegionId = jsonData.RegionId;
            this.GlobalRegion = jsonData.GlobalRegion;
            this.Agency = new Dezrez.Agency.Query.Get.AgencyReferenceDataContract(jsonData.Agency);
            this.Branch = new Dezrez.Branch.Query.Get.BranchReferenceDataContract(jsonData.Branch);
         }
   }


   export class LocationDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      CenterPoint: Dezrez.Location.Query.PointDataContract;
      Extent: Array<Dezrez.Location.Query.PointDataContract>;
      ViewPoints: Array<Dezrez.Location.Query.ViewPointDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CenterPoint = new Dezrez.Location.Query.PointDataContract(jsonData.CenterPoint);
            var extentTempArray = _.map(jsonData.Extent, item => { return new Dezrez.Location.Query.PointDataContract(item);  });
            this.Extent = <Dezrez.Location.Query.PointDataContract[]>extentTempArray;

            var viewPointsTempArray = _.map(jsonData.ViewPoints, item => { return new Dezrez.Location.Query.ViewPointDataContract(item);  });
            this.ViewPoints = <Dezrez.Location.Query.ViewPointDataContract[]>viewPointsTempArray;

         }
   }


   export class AddressDataContract extends Dezrez.Location.BaseAddressDataContract {
      AddressSource: Dezrez.System.EnumDataContract;
      SourceId: string;
      OrganizationName: string;
      Number: string;
      BuildingName: string;
      Street: string;
      Town: string;
      Locality: string;
      County: string;
      Postcode: string;
      Location: Dezrez.Location.Query.LocationDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Location = new Dezrez.Location.Query.LocationDataContract(jsonData.Location);
         }
   }


   export class LatLonDataContract {
      Latitude: number;
      Longitude: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
         }
   }


   export class PoiDataContract extends Dezrez.Location.BasePoiDataContract {
      Name: string;
      PrimaryType: Dezrez.System.EnumDataContract;
      Types: Array<Dezrez.System.EnumDataContract>;
      CenterPoint: Dezrez.Location.Query.PointDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CenterPoint = new Dezrez.Location.Query.PointDataContract(jsonData.CenterPoint);
         }
   }


   export class PoiGeoDataContract extends Dezrez.Location.Query.PoiDataContract {
      CenterPoint: Dezrez.Location.Query.PointDataContract;
      Distance: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Distance = jsonData.Distance;
         }
   }


   export class PoiGeoBoxQueryDataContract {
      PageSize: number;
      PageNumber: number;
      TopLeft: Dezrez.Location.Query.LatLonDataContract;
      BottomRight: Dezrez.Location.Query.LatLonDataContract;
      DistancePoint: Dezrez.Location.Query.LatLonDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PageSize = jsonData.PageSize;
            this.PageNumber = jsonData.PageNumber;
            this.TopLeft = new Dezrez.Location.Query.LatLonDataContract(jsonData.TopLeft);
            this.BottomRight = new Dezrez.Location.Query.LatLonDataContract(jsonData.BottomRight);
            this.DistancePoint = new Dezrez.Location.Query.LatLonDataContract(jsonData.DistancePoint);
         }
   }


   export class PoiGeoRadiusQueryDataContract {
      Latitude: number;
      Longitude: number;
      Radius: number;
      PageSize: number;
      PageNumber: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.Radius = jsonData.Radius;
            this.PageSize = jsonData.PageSize;
            this.PageNumber = jsonData.PageNumber;
         }
   }


   export class RegionDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Title: string;
      Polyline: string;
      RegionSource: number;
      Type: Dezrez.System.EnumDataContract;
      Location: Dezrez.Location.Query.LocationDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Title = jsonData.Title;
            this.Polyline = jsonData.Polyline;
            this.RegionSource = jsonData.RegionSource;
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Location = new Dezrez.Location.Query.LocationDataContract(jsonData.Location);
         }
   }


   export class RegionAliasDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Title: string;
      OriginalId: string;
      OriginalName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Title = jsonData.Title;
            this.OriginalId = jsonData.OriginalId;
            this.OriginalName = jsonData.OriginalName;
         }
   }


   export class AggregateAddressDataContract {
      SourceAddress: Dezrez.Location.Query.AddressDataContract;
      DisplayAddress: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SourceAddress = new Dezrez.Location.Query.AddressDataContract(jsonData.SourceAddress);
            this.DisplayAddress = new Dezrez.Location.Query.AddressDataContract(jsonData.DisplayAddress);
         }
   }


   export class LocationSuggestDataContract {
      Id: string;
      Name: string;
      Type: string;
      Source: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.Type = jsonData.Type;
            this.Source = jsonData.Source;
         }
   }


   export class LocationSuggestQueryDataContract {
      Text: string;
      SuggestSize: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Text = jsonData.Text;
            this.SuggestSize = jsonData.SuggestSize;
         }
   }


   export class PostcodeDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
         }
   }


   export class StreetDataContract {
      Id: string;
      Name: string;
      Location: Dezrez.Location.Query.LocationDataContract;
      OrdnanceSurvey10KTile: string;
      OrdnanceSurvey25KTile: string;
      RawSettlement: string;
      RawLocality: string;
      RawCounty: string;
      RawLocalAuthority: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.Location = new Dezrez.Location.Query.LocationDataContract(jsonData.Location);
            this.OrdnanceSurvey10KTile = jsonData.OrdnanceSurvey10KTile;
            this.OrdnanceSurvey25KTile = jsonData.OrdnanceSurvey25KTile;
            this.RawSettlement = jsonData.RawSettlement;
            this.RawLocality = jsonData.RawLocality;
            this.RawCounty = jsonData.RawCounty;
            this.RawLocalAuthority = jsonData.RawLocalAuthority;
         }
   }


   export class StreetSuggestDataContract {
      Id: string;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
         }
   }


   export class OutcodeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      OutCode: string;
      SourceId: string;
      Source: string;
      Location: Dezrez.Location.Query.LocationDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OutCode = jsonData.OutCode;
            this.SourceId = jsonData.SourceId;
            this.Source = jsonData.Source;
            this.Location = new Dezrez.Location.Query.LocationDataContract(jsonData.Location);
         }
   }

}

export module Dezrez.Oauth.Query {

   export class AuthUrlDataContract {
      Url: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Url = jsonData.Url;
         }
   }

}

export module Dezrez.Aggregations {

   export class AggregationLatLonCountDataContract {
      LatLon: Dezrez.Location.Query.LatLonDataContract;
      Count: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.LatLon = new Dezrez.Location.Query.LatLonDataContract(jsonData.LatLon);
            this.Count = jsonData.Count;
         }
   }

}

export module Dezrez.Chat {

   export class ChatMessageUserDataContract {
      UserId: number;
      UserName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.UserId = jsonData.UserId;
            this.UserName = jsonData.UserName;
         }
   }


   export class ChatMessageCommentDataContract {
      ChatMessageUser: Dezrez.Chat.ChatMessageUserDataContract;
      Comment: string;
      DateTime: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ChatMessageUser = new Dezrez.Chat.ChatMessageUserDataContract(jsonData.ChatMessageUser);
            this.Comment = jsonData.Comment;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
         }
   }

}

export module Dezrez.Chat.Command {

   export class ChatMessageSaveCommandDataContract {
      Id: string;
      DateTimeCreated: DateHelper;
      MessageStatus: string;
      NegotiatorId: number;
      NegotiatorName: string;
      Comments: Array<Dezrez.Chat.ChatMessageCommentDataContract>;
      Recipients: Array<Dezrez.Chat.ChatMessageUserDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.DateTimeCreated = new DateHelper(jsonData.DateTimeCreated, null, true);
            this.MessageStatus = jsonData.MessageStatus;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.NegotiatorName = jsonData.NegotiatorName;
            var commentsTempArray = _.map(jsonData.Comments, item => { return new Dezrez.Chat.ChatMessageCommentDataContract(item);  });
            this.Comments = <Dezrez.Chat.ChatMessageCommentDataContract[]>commentsTempArray;

            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.Chat.ChatMessageUserDataContract(item);  });
            this.Recipients = <Dezrez.Chat.ChatMessageUserDataContract[]>recipientsTempArray;

         }
   }


   export class ChatMessageSaveResponseDataContract {
      Id: string;
      IsSuccess: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.IsSuccess = jsonData.IsSuccess;
         }
   }

}

export module Dezrez.Chat.Query.Get {

   export class ChatMessageDataContract {
      Id: string;
      DateTimeCreated: DateHelper;
      MessageStatus: string;
      NegotiatorId: number;
      NegotiatorName: string;
      Comments: Array<Dezrez.Chat.ChatMessageCommentDataContract>;
      Recipients: Array<Dezrez.Chat.ChatMessageUserDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.DateTimeCreated = new DateHelper(jsonData.DateTimeCreated, null, true);
            this.MessageStatus = jsonData.MessageStatus;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.NegotiatorName = jsonData.NegotiatorName;
            var commentsTempArray = _.map(jsonData.Comments, item => { return new Dezrez.Chat.ChatMessageCommentDataContract(item);  });
            this.Comments = <Dezrez.Chat.ChatMessageCommentDataContract[]>commentsTempArray;

            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.Chat.ChatMessageUserDataContract(item);  });
            this.Recipients = <Dezrez.Chat.ChatMessageUserDataContract[]>recipientsTempArray;

         }
   }

}

export module Dezrez.Chat.Query.UnreadSummary {

   export class ChatUnreadMessagesResponseDataContract {
      Count: number;
      Messages: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Count = jsonData.Count;
            this.Messages = jsonData.Messages;
         }
   }

}

export module Dezrez.CorePlatformState {

   export class ReportMigrationStateDataContract {
      StartTime: DateHelper;
      StateSetBy: string;
      AgencyId: number;
      Node: number;
      ResourceLockKey: string;
      Reference: string;
      Title: string;
      Description: string;
      EstimatedClearingDate: DateHelper;
      MigrationId: number;
      EstimatedMigrationDuration: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.StartTime = new DateHelper(jsonData.StartTime, null, true);
            this.StateSetBy = jsonData.StateSetBy;
            this.AgencyId = jsonData.AgencyId;
            this.Node = jsonData.Node;
            this.ResourceLockKey = jsonData.ResourceLockKey;
            this.Reference = jsonData.Reference;
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.EstimatedClearingDate = new DateHelper(jsonData.EstimatedClearingDate, null, true);
            this.MigrationId = jsonData.MigrationId;
            this.EstimatedMigrationDuration = jsonData.EstimatedMigrationDuration;
         }
   }


   export class ReportResyncStateDataContract {
      StartTime: DateHelper;
      StateSetBy: string;
      AgencyId: number;
      Node: number;
      ResourceLockKey: string;
      Reference: string;
      Title: string;
      Description: string;
      JobReference: any;
      EstimatedClearingDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.StartTime = new DateHelper(jsonData.StartTime, null, true);
            this.StateSetBy = jsonData.StateSetBy;
            this.AgencyId = jsonData.AgencyId;
            this.Node = jsonData.Node;
            this.ResourceLockKey = jsonData.ResourceLockKey;
            this.Reference = jsonData.Reference;
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.JobReference = jsonData.JobReference;
            this.EstimatedClearingDate = new DateHelper(jsonData.EstimatedClearingDate, null, true);
         }
   }

}

export module Dezrez.Branch.Query.Get {

   export class BranchDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      Description: string;
      ContactDetails: Dezrez.People.Query.Get.ContactDetailsDataContract;
      Agency: Dezrez.Agency.Query.Get.AgencyReferenceDataContract;
      Responsibilities: Array<Dezrez.System.EnumDataContract>;
      FeeLevelSetting: Dezrez.System.EnumDataContract;
      Members: Array<Dezrez.Agency.Query.Teams.BranchTeamListMemberDataContract>;
      DefaultCulture: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.ContactDetails = new Dezrez.People.Query.Get.ContactDetailsDataContract(jsonData.ContactDetails);
            this.Agency = new Dezrez.Agency.Query.Get.AgencyReferenceDataContract(jsonData.Agency);
            var responsibilitiesTempArray = _.map(jsonData.Responsibilities, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Responsibilities = <Dezrez.System.EnumDataContract[]>responsibilitiesTempArray;

            this.FeeLevelSetting = new Dezrez.System.EnumDataContract(jsonData.FeeLevelSetting);
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Agency.Query.Teams.BranchTeamListMemberDataContract(item);  });
            this.Members = <Dezrez.Agency.Query.Teams.BranchTeamListMemberDataContract[]>membersTempArray;

            this.DefaultCulture = jsonData.DefaultCulture;
         }
   }


   export class BranchReferenceDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }

}

export module Dezrez.Branch.Query {

   export class BranchKeyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Code: string;
      IsCheckedOut: boolean;
      Property: Dezrez.Branch.Query.BranchKeyPropertyDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Code = jsonData.Code;
            this.IsCheckedOut = jsonData.IsCheckedOut;
            this.Property = new Dezrez.Branch.Query.BranchKeyPropertyDataContract(jsonData.Property);
         }
   }


   export class BranchKeyPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
         }
   }

}

export module Dezrez.Branch.Command {

   export class BranchAddNegotiatorCommand {
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }

}

export module Dezrez.Descriptions.Command {

   export class DescriptionSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Notes = jsonData.Notes;
            this.PropertyId = jsonData.PropertyId;
            this.RoleId = jsonData.RoleId;
            this.ForceUpdate = jsonData.ForceUpdate;
         }
   }


   export class CostDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Pairs: Array<Dezrez.Descriptions.Query.TriStatePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var pairsTempArray = _.map(jsonData.Pairs, item => { return new Dezrez.Descriptions.Query.TriStatePairDataContract(item);  });
            this.Pairs = <Dezrez.Descriptions.Query.TriStatePairDataContract[]>pairsTempArray;

         }
   }


   export class FurnishingDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      FurnishLevel: Dezrez.System.EnumDataContract;
      Pairs: Array<Dezrez.Descriptions.Query.TriStatePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FurnishLevel = new Dezrez.System.EnumDataContract(jsonData.FurnishLevel);
            var pairsTempArray = _.map(jsonData.Pairs, item => { return new Dezrez.Descriptions.Query.TriStatePairDataContract(item);  });
            this.Pairs = <Dezrez.Descriptions.Query.TriStatePairDataContract[]>pairsTempArray;

         }
   }


   export class OccupierAllowanceDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Pairs: Array<Dezrez.Descriptions.Query.TriStatePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var pairsTempArray = _.map(jsonData.Pairs, item => { return new Dezrez.Descriptions.Query.TriStatePairDataContract(item);  });
            this.Pairs = <Dezrez.Descriptions.Query.TriStatePairDataContract[]>pairsTempArray;

         }
   }


   export class FeatureSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Order: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
            this.Name = jsonData.Name;
         }
   }


   export class TagSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Order: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
            this.Name = jsonData.Name;
         }
   }


   export class RoomSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Order: number;
      Name: string;
      Text: string;
      RoomDescriptionType: Dezrez.System.EnumDataContract;
      RoomMeasurements: Array<Dezrez.Descriptions.Command.RoomMeasurementSaveDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
            this.Name = jsonData.Name;
            this.Text = jsonData.Text;
            this.RoomDescriptionType = new Dezrez.System.EnumDataContract(jsonData.RoomDescriptionType);
            var roomMeasurementsTempArray = _.map(jsonData.RoomMeasurements, item => { return new Dezrez.Descriptions.Command.RoomMeasurementSaveDataContract(item);  });
            this.RoomMeasurements = <Dezrez.Descriptions.Command.RoomMeasurementSaveDataContract[]>roomMeasurementsTempArray;

         }
   }


   export class FeatureDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Features: Array<Dezrez.Descriptions.Command.FeatureSaveDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var featuresTempArray = _.map(jsonData.Features, item => { return new Dezrez.Descriptions.Command.FeatureSaveDataContract(item);  });
            this.Features = <Dezrez.Descriptions.Command.FeatureSaveDataContract[]>featuresTempArray;

         }
   }


   export class RoomCountDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Bedrooms: number;
      Bathrooms: number;
      Receptions: number;
      Others: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Bedrooms = jsonData.Bedrooms;
            this.Bathrooms = jsonData.Bathrooms;
            this.Receptions = jsonData.Receptions;
            this.Others = jsonData.Others;
         }
   }


   export class RoomDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Rooms: Array<Dezrez.Descriptions.Command.RoomSaveDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var roomsTempArray = _.map(jsonData.Rooms, item => { return new Dezrez.Descriptions.Command.RoomSaveDataContract(item);  });
            this.Rooms = <Dezrez.Descriptions.Command.RoomSaveDataContract[]>roomsTempArray;

         }
   }


   export class StyleAgeDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      PropertyType: Dezrez.System.EnumDataContract;
      StyleType: Dezrez.System.EnumDataContract;
      LeaseType: Dezrez.System.EnumDataContract;
      AgeType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyType = new Dezrez.System.EnumDataContract(jsonData.PropertyType);
            this.StyleType = new Dezrez.System.EnumDataContract(jsonData.StyleType);
            this.LeaseType = new Dezrez.System.EnumDataContract(jsonData.LeaseType);
            this.AgeType = new Dezrez.System.EnumDataContract(jsonData.AgeType);
         }
   }


   export class TagDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Tags: Array<Dezrez.Descriptions.Command.TagSaveDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var tagsTempArray = _.map(jsonData.Tags, item => { return new Dezrez.Descriptions.Command.TagSaveDataContract(item);  });
            this.Tags = <Dezrez.Descriptions.Command.TagSaveDataContract[]>tagsTempArray;

         }
   }


   export class TextDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Text: string;
      Type: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Text = jsonData.Text;
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
         }
   }


   export class AmenityDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      Gardens: number;
      ParkingSpaces: number;
      Garages: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gardens = jsonData.Gardens;
            this.ParkingSpaces = jsonData.ParkingSpaces;
            this.Garages = jsonData.Garages;
         }
   }


   export class RoomMeasurementSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      MeasurementUnitType: Dezrez.System.EnumDataContract;
      Width: number;
      Length: number;
      OriginalMeasurement: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MeasurementUnitType = new Dezrez.System.EnumDataContract(jsonData.MeasurementUnitType);
            this.Width = jsonData.Width;
            this.Length = jsonData.Length;
            this.OriginalMeasurement = jsonData.OriginalMeasurement;
         }
   }


   export class LocalAuthorityDescriptionSaveDataContract extends Dezrez.Descriptions.Command.DescriptionSaveDataContract {
      Name: string;
      Notes: string;
      PropertyId: number;
      RoleId: number;
      ForceUpdate: boolean;
      AuthorityName: string;
      TaxBand: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AuthorityName = jsonData.AuthorityName;
            this.TaxBand = new Dezrez.System.EnumDataContract(jsonData.TaxBand);
         }
   }


   export class SetRoomImagesDataContract {
      RoomDescriptionId: number;
      RoomId: number;
      ImageOrder: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoomDescriptionId = jsonData.RoomDescriptionId;
            this.RoomId = jsonData.RoomId;
            this.ImageOrder = (<number[]>jsonData.ImageOrder);
         }
   }

}

export module Dezrez.Rooms.Query {

   export class RoomDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Order: number;
      Name: string;
      Text: string;
      RoomDescriptionType: Dezrez.System.EnumDataContract;
      RoomMeasurements: Array<Dezrez.Rooms.Query.RoomMeasurementDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
            this.Name = jsonData.Name;
            this.Text = jsonData.Text;
            this.RoomDescriptionType = new Dezrez.System.EnumDataContract(jsonData.RoomDescriptionType);
            var roomMeasurementsTempArray = _.map(jsonData.RoomMeasurements, item => { return new Dezrez.Rooms.Query.RoomMeasurementDataContract(item);  });
            this.RoomMeasurements = <Dezrez.Rooms.Query.RoomMeasurementDataContract[]>roomMeasurementsTempArray;

         }
   }


   export class RoomMeasurementDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      MeasurementUnitType: Dezrez.System.EnumDataContract;
      Width: number;
      Length: number;
      OriginalMeasurement: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MeasurementUnitType = new Dezrez.System.EnumDataContract(jsonData.MeasurementUnitType);
            this.Width = jsonData.Width;
            this.Length = jsonData.Length;
            this.OriginalMeasurement = jsonData.OriginalMeasurement;
         }
   }

}

export module Dezrez.Media {

   export class DocumentDataContractBase extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Tags: Array<Dezrez.System.TagDataContract>;
      DocumentType: Dezrez.System.EnumDataContract;
      DocumentSubType: Dezrez.System.EnumDataContract;
      FileName: string;
      ContentType: string;
      FileExtension: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var tagsTempArray = _.map(jsonData.Tags, item => { return new Dezrez.System.TagDataContract(item);  });
            this.Tags = <Dezrez.System.TagDataContract[]>tagsTempArray;

            this.DocumentType = new Dezrez.System.EnumDataContract(jsonData.DocumentType);
            this.DocumentSubType = new Dezrez.System.EnumDataContract(jsonData.DocumentSubType);
            this.FileName = jsonData.FileName;
            this.ContentType = jsonData.ContentType;
            this.FileExtension = jsonData.FileExtension;
            this.Description = jsonData.Description;
         }
   }


   export class DocumentDataContract extends Dezrez.Media.DocumentDataContractBase {
      Tags: Array<Dezrez.System.TagDataContract>;
      DocumentType: Dezrez.System.EnumDataContract;
      DocumentSubType: Dezrez.System.EnumDataContract;
      FileName: string;
      ContentType: string;
      FileExtension: string;
      Description: string;
      Url: string;
      RequiresAuthentication: boolean;
      ExpiryDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Url = jsonData.Url;
            this.RequiresAuthentication = jsonData.RequiresAuthentication;
            this.ExpiryDate = new DateHelper(jsonData.ExpiryDate, null, true);
         }
   }


   export class ExternalDocumentSaveDataContract extends Dezrez.Media.DocumentDataContractBase {
      Tags: Array<Dezrez.System.TagDataContract>;
      DocumentType: Dezrez.System.EnumDataContract;
      DocumentSubType: Dezrez.System.EnumDataContract;
      FileName: string;
      ContentType: string;
      FileExtension: string;
      Description: string;
      Url: string;
      StoreInRezi: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Url = jsonData.Url;
            this.StoreInRezi = jsonData.StoreInRezi;
         }
   }

}

export module Dezrez.Media.Commands {

   export class DocumentSaveCommandDataContract extends Dezrez.Media.DocumentDataContractBase {
      Tags: Array<Dezrez.System.TagDataContract>;
      DocumentType: Dezrez.System.EnumDataContract;
      DocumentSubType: Dezrez.System.EnumDataContract;
      FileName: string;
      ContentType: string;
      FileExtension: string;
      Description: string;
      FileStream: any;
      IsPublic: boolean;
      ExpiryDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FileStream = jsonData.FileStream;
            this.IsPublic = jsonData.IsPublic;
            this.ExpiryDate = new DateHelper(jsonData.ExpiryDate, null, true);
         }
   }

}

export module Dezrez.Descriptions.Query {

   export class FeatureDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class OrderedFeatureDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Order = jsonData.Order;
         }
   }


   export class DescriptionDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Order = jsonData.Order;
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.PropertyId = jsonData.PropertyId;
            this.Notes = jsonData.Notes;
            var rolesTempArray = _.map(jsonData.Roles, item => { return new Dezrez.Descriptions.Query.DescriptionRoleDataContract(item);  });
            this.Roles = <Dezrez.Descriptions.Query.DescriptionRoleDataContract[]>rolesTempArray;

         }
   }


   export class FeatureDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      Features: Array<Dezrez.Descriptions.Query.OrderedFeatureDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var featuresTempArray = _.map(jsonData.Features, item => { return new Dezrez.Descriptions.Query.OrderedFeatureDataContract(item);  });
            this.Features = <Dezrez.Descriptions.Query.OrderedFeatureDataContract[]>featuresTempArray;

         }
   }


   export class RoomCountDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      Bedrooms: number;
      Bathrooms: number;
      Receptions: number;
      Others: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Bedrooms = jsonData.Bedrooms;
            this.Bathrooms = jsonData.Bathrooms;
            this.Receptions = jsonData.Receptions;
            this.Others = jsonData.Others;
         }
   }


   export class RoomDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      Rooms: Array<Dezrez.Descriptions.Query.RoomDescriptionSelectedRoomDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var roomsTempArray = _.map(jsonData.Rooms, item => { return new Dezrez.Descriptions.Query.RoomDescriptionSelectedRoomDataContract(item);  });
            this.Rooms = <Dezrez.Descriptions.Query.RoomDescriptionSelectedRoomDataContract[]>roomsTempArray;

         }
   }


   export class StyleAgeDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      PropertyType: Dezrez.System.EnumDataContract;
      StyleType: Dezrez.System.EnumDataContract;
      LeaseType: Dezrez.System.EnumDataContract;
      AgeType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyType = new Dezrez.System.EnumDataContract(jsonData.PropertyType);
            this.StyleType = new Dezrez.System.EnumDataContract(jsonData.StyleType);
            this.LeaseType = new Dezrez.System.EnumDataContract(jsonData.LeaseType);
            this.AgeType = new Dezrez.System.EnumDataContract(jsonData.AgeType);
         }
   }


   export class TagDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      Tags: Array<Dezrez.System.OrderedTagDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var tagsTempArray = _.map(jsonData.Tags, item => { return new Dezrez.System.OrderedTagDataContract(item);  });
            this.Tags = <Dezrez.System.OrderedTagDataContract[]>tagsTempArray;

         }
   }


   export class TextDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      Text: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Text = jsonData.Text;
         }
   }


   export class RoomDescriptionSelectedRoomDataContract extends Dezrez.Rooms.Query.RoomDataContract {
      Order: number;
      Name: string;
      Text: string;
      RoomDescriptionType: Dezrez.System.EnumDataContract;
      RoomMeasurements: Array<Dezrez.Rooms.Query.RoomMeasurementDataContract>;
      Images: Array<Dezrez.Descriptions.Query.RoomImageDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var imagesTempArray = _.map(jsonData.Images, item => { return new Dezrez.Descriptions.Query.RoomImageDataContract(item);  });
            this.Images = <Dezrez.Descriptions.Query.RoomImageDataContract[]>imagesTempArray;

         }
   }


   export class RoomImageDataContract extends Dezrez.Media.DocumentDataContract {
      Url: string;
      RequiresAuthentication: boolean;
      ExpiryDate: DateHelper;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
         }
   }


   export class AmenityDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      Gardens: number;
      ParkingSpaces: number;
      Garages: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gardens = jsonData.Gardens;
            this.ParkingSpaces = jsonData.ParkingSpaces;
            this.Garages = jsonData.Garages;
         }
   }


   export class DescriptionRoleDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
         }
   }


   export class CostDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      EnumName: string;
      Pairs: Array<Dezrez.Descriptions.Query.TriStatePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EnumName = jsonData.EnumName;
            var pairsTempArray = _.map(jsonData.Pairs, item => { return new Dezrez.Descriptions.Query.TriStatePairDataContract(item);  });
            this.Pairs = <Dezrez.Descriptions.Query.TriStatePairDataContract[]>pairsTempArray;

         }
   }


   export class FurnishingDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      EnumName: string;
      FurnishLevel: Dezrez.System.EnumDataContract;
      Pairs: Array<Dezrez.Descriptions.Query.TriStatePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EnumName = jsonData.EnumName;
            this.FurnishLevel = new Dezrez.System.EnumDataContract(jsonData.FurnishLevel);
            var pairsTempArray = _.map(jsonData.Pairs, item => { return new Dezrez.Descriptions.Query.TriStatePairDataContract(item);  });
            this.Pairs = <Dezrez.Descriptions.Query.TriStatePairDataContract[]>pairsTempArray;

         }
   }


   export class OccupierAllowanceDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      EnumName: string;
      Pairs: Array<Dezrez.Descriptions.Query.TriStatePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EnumName = jsonData.EnumName;
            var pairsTempArray = _.map(jsonData.Pairs, item => { return new Dezrez.Descriptions.Query.TriStatePairDataContract(item);  });
            this.Pairs = <Dezrez.Descriptions.Query.TriStatePairDataContract[]>pairsTempArray;

         }
   }


   export class TriStatePairDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Key: Dezrez.System.EnumDataContract;
      Value: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Key = new Dezrez.System.EnumDataContract(jsonData.Key);
            this.Value = new Dezrez.System.EnumDataContract(jsonData.Value);
         }
   }


   export class LocalAuthorityDescriptionDataContract extends Dezrez.Descriptions.Query.DescriptionDataContract {
      Name: string;
      Order: number;
      Type: Dezrez.System.EnumDataContract;
      PropertyId: number;
      Notes: string;
      Roles: Array<Dezrez.Descriptions.Query.DescriptionRoleDataContract>;
      AuthorityName: string;
      TaxBand: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AuthorityName = jsonData.AuthorityName;
            this.TaxBand = new Dezrez.System.EnumDataContract(jsonData.TaxBand);
         }
   }

}

export module Dezrez.DocumentGeneration.Commands {

   export class GeneratePackJobBaseDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.SackFriendlyName = jsonData.SackFriendlyName;
            this.EnvelopeTemplatePackId = jsonData.EnvelopeTemplatePackId;
            this.BrandId = jsonData.BrandId;
            this.NegotiatorPpId = jsonData.NegotiatorPpId;
            this.CustomText = jsonData.CustomText;
            this.EnvelopeProcessingMethod = new Dezrez.System.EnumDataContract(jsonData.EnvelopeProcessingMethod);
            this.AutoProcessSack = jsonData.AutoProcessSack;
            this.SendToDrafts = jsonData.SendToDrafts;
            this.PrintedOnHeaded = jsonData.PrintedOnHeaded;
            this.WorkflowIndex = jsonData.WorkflowIndex;
         }
   }


   export class GeneratePackJobDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      PrimaryCompanyGroupRoleIds: Array<number>;
      SecondaryCompanyGroupRoleIds: Array<number>;
      PropertyRoleIds: Array<number>;
      OwnerGroupRoleIds: Array<number>;
      TentantGroupRoleIds: Array<number>;
      ApplicantGroupRoleIds: Array<number>;
      EventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PrimaryCompanyGroupRoleIds = (<number[]>jsonData.PrimaryCompanyGroupRoleIds);
            this.SecondaryCompanyGroupRoleIds = (<number[]>jsonData.SecondaryCompanyGroupRoleIds);
            this.PropertyRoleIds = (<number[]>jsonData.PropertyRoleIds);
            this.OwnerGroupRoleIds = (<number[]>jsonData.OwnerGroupRoleIds);
            this.TentantGroupRoleIds = (<number[]>jsonData.TentantGroupRoleIds);
            this.ApplicantGroupRoleIds = (<number[]>jsonData.ApplicantGroupRoleIds);
            this.EventId = jsonData.EventId;
         }
   }


   export class BoardOrderingPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      BoardOrderingEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.BoardOrderingEventId = jsonData.BoardOrderingEventId;
         }
   }


   export class EnvelopeTemplatePackSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FriendlyName: string;
      EnvelopeTemplatePackType: Dezrez.System.EnumDataContract;
      EnvelopeTemplates: Array<number>;
      IsDefault: boolean;
      NotReady: boolean;
      CustomPrompt: string;
      Description: string;
      WorkflowIndex: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FriendlyName = jsonData.FriendlyName;
            this.EnvelopeTemplatePackType = new Dezrez.System.EnumDataContract(jsonData.EnvelopeTemplatePackType);
            this.EnvelopeTemplates = (<number[]>jsonData.EnvelopeTemplates);
            this.IsDefault = jsonData.IsDefault;
            this.NotReady = jsonData.NotReady;
            this.CustomPrompt = jsonData.CustomPrompt;
            this.Description = jsonData.Description;
            this.WorkflowIndex = jsonData.WorkflowIndex;
         }
   }


   export class EnvelopeTemplateSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FriendlyName: string;
      LetterTemplates: Array<number>;
      CanBeSplit: boolean;
      EnvelopeTemplateTargetType: Dezrez.System.EnumDataContract;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FriendlyName = jsonData.FriendlyName;
            this.LetterTemplates = (<number[]>jsonData.LetterTemplates);
            this.CanBeSplit = jsonData.CanBeSplit;
            this.EnvelopeTemplateTargetType = new Dezrez.System.EnumDataContract(jsonData.EnvelopeTemplateTargetType);
            this.Description = jsonData.Description;
         }
   }


   export class GenerateValuationConfirmationLetterBaseDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      OwnerGroupRoleId: number;
      ValuationPropertyMarketingRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwnerGroupRoleId = jsonData.OwnerGroupRoleId;
            this.ValuationPropertyMarketingRoleId = jsonData.ValuationPropertyMarketingRoleId;
         }
   }


   export class LetterTemplateSaveDataContract extends Dezrez.Media.Commands.DocumentSaveCommandDataContract {
      FileStream: any;
      IsPublic: boolean;
      ExpiryDate: DateHelper;
      TemplateType: Dezrez.System.EnumDataContract;
      OutputFormat: Dezrez.System.EnumDataContract;
      RequiredTypes: Array<Dezrez.System.EnumDataContract>;
      AnalyticsCampaign: Dezrez.Agency.Command.Analytics.CampaignSaveDataContract;
      ApplyStyleDocument: boolean;
      XsltRepresentation: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TemplateType = new Dezrez.System.EnumDataContract(jsonData.TemplateType);
            this.OutputFormat = new Dezrez.System.EnumDataContract(jsonData.OutputFormat);
            var requiredTypesTempArray = _.map(jsonData.RequiredTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.RequiredTypes = <Dezrez.System.EnumDataContract[]>requiredTypesTempArray;

            this.AnalyticsCampaign = new Dezrez.Agency.Command.Analytics.CampaignSaveDataContract(jsonData.AnalyticsCampaign);
            this.ApplyStyleDocument = jsonData.ApplyStyleDocument;
            this.XsltRepresentation = jsonData.XsltRepresentation;
         }
   }


   export class SendSinglePropertyMatchToApplicantListPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      PropertyRoleId: number;
      ApplicantRoleIds: Array<number>;
      ExcludedApplicantRoleIds: Array<number>;
      Filter: Dezrez.Role.Query.Matches.RoleApplicantMatchFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyRoleId = jsonData.PropertyRoleId;
            this.ApplicantRoleIds = (<number[]>jsonData.ApplicantRoleIds);
            this.ExcludedApplicantRoleIds = (<number[]>jsonData.ExcludedApplicantRoleIds);
            this.Filter = new Dezrez.Role.Query.Matches.RoleApplicantMatchFilterDataContract(jsonData.Filter);
         }
   }


   export class OfferPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      OfferRecordEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OfferRecordEventId = jsonData.OfferRecordEventId;
         }
   }


   export class SendMultiplePropertyMatchToApplicantListPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      GroupSearchingRoleIds: Array<number>;
      ExcludedGroupSearchingRoleIds: Array<number>;
      MinNumberOfProperties: number;
      MaxNumberOfProperties: number;
      MinScore: number;
      IncludePropertiesSentBefore: boolean;
      WithinDays: number;
      ExcludeOfferAccepted: boolean;
      Filter: Dezrez.Lists.Groups.Filter.GroupListFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GroupSearchingRoleIds = (<number[]>jsonData.GroupSearchingRoleIds);
            this.ExcludedGroupSearchingRoleIds = (<number[]>jsonData.ExcludedGroupSearchingRoleIds);
            this.MinNumberOfProperties = jsonData.MinNumberOfProperties;
            this.MaxNumberOfProperties = jsonData.MaxNumberOfProperties;
            this.MinScore = jsonData.MinScore;
            this.IncludePropertiesSentBefore = jsonData.IncludePropertiesSentBefore;
            this.WithinDays = jsonData.WithinDays;
            this.ExcludeOfferAccepted = jsonData.ExcludeOfferAccepted;
            this.Filter = new Dezrez.Lists.Groups.Filter.GroupListFilterDataContract(jsonData.Filter);
         }
   }


   export class SendSelectedPropertiesToApplicantPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      ApplicantRoleId: number;
      PropertyRoleIds: Array<number>;
      ExcludedPropertyRoleIds: Array<number>;
      Filter: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ApplicantRoleId = jsonData.ApplicantRoleId;
            this.PropertyRoleIds = (<number[]>jsonData.PropertyRoleIds);
            this.ExcludedPropertyRoleIds = (<number[]>jsonData.ExcludedPropertyRoleIds);
            this.Filter = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchFilterDataContract(jsonData.Filter);
         }
   }


   export class SendVendorReportPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      VendorPeopleGroupId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.VendorPeopleGroupId = jsonData.VendorPeopleGroupId;
         }
   }


   export class ViewingPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      ViewingAppointmentEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ViewingAppointmentEventId = jsonData.ViewingAppointmentEventId;
         }
   }


   export class EPCPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      EPCEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EPCEventId = jsonData.EPCEventId;
         }
   }


   export class GeneralAppointmentPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      GeneralAppointmentEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GeneralAppointmentEventId = jsonData.GeneralAppointmentEventId;
         }
   }


   export class InstructionPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      PropertyMarketingRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyMarketingRoleId = jsonData.PropertyMarketingRoleId;
         }
   }


   export class MeetingPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      MeetingEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MeetingEventId = jsonData.MeetingEventId;
         }
   }


   export class ValuationPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      ValuationEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ValuationEventId = jsonData.ValuationEventId;
         }
   }


   export class WelcomePackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      ApplicantRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ApplicantRoleId = jsonData.ApplicantRoleId;
         }
   }


   export class TemplateRenameDataContract {
      Filename: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Filename = jsonData.Filename;
            this.Description = jsonData.Description;
         }
   }


   export class PropertyListWithFilterDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      PropertyRoleIds: Array<number>;
      ExcludedPropertyRoleIds: Array<number>;
      Filter: Dezrez.Lists.Property.Filter.PropertyListFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyRoleIds = (<number[]>jsonData.PropertyRoleIds);
            this.ExcludedPropertyRoleIds = (<number[]>jsonData.ExcludedPropertyRoleIds);
            this.Filter = new Dezrez.Lists.Property.Filter.PropertyListFilterDataContract(jsonData.Filter);
         }
   }


   export class ValuationResultPackDataContract extends Dezrez.DocumentGeneration.Commands.GeneratePackJobBaseDataContract {
      SackFriendlyName: string;
      EnvelopeTemplatePackId: number;
      BrandId: number;
      NegotiatorPpId: number;
      CustomText: string;
      EnvelopeProcessingMethod: Dezrez.System.EnumDataContract;
      AutoProcessSack: boolean;
      SendToDrafts: boolean;
      PrintedOnHeaded: boolean;
      WorkflowIndex: number;
      ConfirmationResultEventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ConfirmationResultEventId = jsonData.ConfirmationResultEventId;
         }
   }

}

export module Dezrez.DocumentGeneration.Commands.SendDigitalSigningEnvelope {

   export class SendDigitalSigningEnvelopeDataContract {
      GroupId: number;
      NegotiatorId: number;
      ContactItemIds: Array<number>;
      Message: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.ContactItemIds = (<number[]>jsonData.ContactItemIds);
            this.Message = jsonData.Message;
            this.PreferredProviderId = jsonData.PreferredProviderId;
            this.BrandId = jsonData.BrandId;
            this.FranchiseId = jsonData.FranchiseId;
         }
   }

}

export module Dezrez.DocumentGeneration.Query {

   export class EnvelopeTemplateDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FriendlyName: string;
      LetterTemplates: Array<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>;
      CanBeSplit: boolean;
      EnvelopeTemplateTargetType: Dezrez.System.EnumDataContract;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FriendlyName = jsonData.FriendlyName;
            var letterTemplatesTempArray = _.map(jsonData.LetterTemplates, item => { return new Dezrez.DocumentGeneration.Query.LetterTemplateDataContract(item);  });
            this.LetterTemplates = <Dezrez.DocumentGeneration.Query.LetterTemplateDataContract[]>letterTemplatesTempArray;

            this.CanBeSplit = jsonData.CanBeSplit;
            this.EnvelopeTemplateTargetType = new Dezrez.System.EnumDataContract(jsonData.EnvelopeTemplateTargetType);
            this.Description = jsonData.Description;
         }
   }


   export class EnvelopeTemplatePackDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FriendlyName: string;
      EnvelopeTemplates: Array<Dezrez.DocumentGeneration.Query.EnvelopeTemplateDataContract>;
      EnvelopeTemplatePackType: Dezrez.System.EnumDataContract;
      IsDefault: boolean;
      NotReady: boolean;
      CustomPrompt: string;
      Endpoint: string;
      Contract: string;
      EventType: string;
      Description: string;
      WorkflowIndex: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FriendlyName = jsonData.FriendlyName;
            var envelopeTemplatesTempArray = _.map(jsonData.EnvelopeTemplates, item => { return new Dezrez.DocumentGeneration.Query.EnvelopeTemplateDataContract(item);  });
            this.EnvelopeTemplates = <Dezrez.DocumentGeneration.Query.EnvelopeTemplateDataContract[]>envelopeTemplatesTempArray;

            this.EnvelopeTemplatePackType = new Dezrez.System.EnumDataContract(jsonData.EnvelopeTemplatePackType);
            this.IsDefault = jsonData.IsDefault;
            this.NotReady = jsonData.NotReady;
            this.CustomPrompt = jsonData.CustomPrompt;
            this.Endpoint = jsonData.Endpoint;
            this.Contract = jsonData.Contract;
            this.EventType = jsonData.EventType;
            this.Description = jsonData.Description;
            this.WorkflowIndex = jsonData.WorkflowIndex;
         }
   }


   export class LetterTemplateDataContract extends Dezrez.Media.DocumentDataContract {
      Url: string;
      RequiresAuthentication: boolean;
      ExpiryDate: DateHelper;
      TemplateType: Dezrez.System.EnumDataContract;
      OutputFormat: Dezrez.System.EnumDataContract;
      RequiredTypes: Array<Dezrez.System.EnumDataContract>;
      AnalyticsCampaign: Dezrez.Agency.Query.Analytics.CampaignDataContract;
      ApplyStyleDocument: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TemplateType = new Dezrez.System.EnumDataContract(jsonData.TemplateType);
            this.OutputFormat = new Dezrez.System.EnumDataContract(jsonData.OutputFormat);
            var requiredTypesTempArray = _.map(jsonData.RequiredTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.RequiredTypes = <Dezrez.System.EnumDataContract[]>requiredTypesTempArray;

            this.AnalyticsCampaign = new Dezrez.Agency.Query.Analytics.CampaignDataContract(jsonData.AnalyticsCampaign);
            this.ApplyStyleDocument = jsonData.ApplyStyleDocument;
         }
   }


   export class PostTemplateDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Contract: Dezrez.System.BaseDataContract;
      Warnings: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Contract = new Dezrez.System.BaseDataContract(jsonData.Contract);
            this.Warnings = (<string[]>jsonData.Warnings);
         }
   }


   export class DefaultTextResponseDataContract {
      ContentType: string;
      Content: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ContentType = jsonData.ContentType;
            this.Content = jsonData.Content;
         }
   }


   export class DocuSignSignerDataContract {
      email: string;
      name: string;
      recipientId: string;
      tabs: Dezrez.DocumentGeneration.Query.DocuSignTabsDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.email = jsonData.email;
            this.name = jsonData.name;
            this.recipientId = jsonData.recipientId;
            this.tabs = new Dezrez.DocumentGeneration.Query.DocuSignTabsDataContract(jsonData.tabs);
         }
   }


   export class DocuSignTabDataContract {
      xPosition: string;
      yPosition: string;
      documentId: string;
      pageNumber: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.xPosition = jsonData.xPosition;
            this.yPosition = jsonData.yPosition;
            this.documentId = jsonData.documentId;
            this.pageNumber = jsonData.pageNumber;
         }
   }


   export class DocuSignTabsDataContract {
      signHereTabs: Array<Dezrez.DocumentGeneration.Query.DocuSignTabDataContract>;
      initialHereTabs: Array<Dezrez.DocumentGeneration.Query.DocuSignTabDataContract>;
      dateSignedTabs: Array<Dezrez.DocumentGeneration.Query.DocuSignTabDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var signHereTabsTempArray = _.map(jsonData.signHereTabs, item => { return new Dezrez.DocumentGeneration.Query.DocuSignTabDataContract(item);  });
            this.signHereTabs = <Dezrez.DocumentGeneration.Query.DocuSignTabDataContract[]>signHereTabsTempArray;

            var initialHereTabsTempArray = _.map(jsonData.initialHereTabs, item => { return new Dezrez.DocumentGeneration.Query.DocuSignTabDataContract(item);  });
            this.initialHereTabs = <Dezrez.DocumentGeneration.Query.DocuSignTabDataContract[]>initialHereTabsTempArray;

            var dateSignedTabsTempArray = _.map(jsonData.dateSignedTabs, item => { return new Dezrez.DocumentGeneration.Query.DocuSignTabDataContract(item);  });
            this.dateSignedTabs = <Dezrez.DocumentGeneration.Query.DocuSignTabDataContract[]>dateSignedTabsTempArray;

         }
   }


   export class EnvelopeContainerDataContract {
      envelope: Dezrez.DocumentGeneration.Query.EnvelopeDataContract;
      AlternateContactItemDataContract: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.envelope = new Dezrez.DocumentGeneration.Query.EnvelopeDataContract(jsonData.envelope);
            var alternateContactItemDataContractTempArray = _.map(jsonData.AlternateContactItemDataContract, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.AlternateContactItemDataContract = <Dezrez.People.Query.Get.ContactItemDataContract[]>alternateContactItemDataContractTempArray;

         }
   }


   export class EnvelopeDataContract {
      SackReference: string;
      Reference: string;
      FriendlyName: string;
      Letters: Array<Dezrez.DocumentGeneration.Query.LetterDataContract>;
      PropertyRoleIds: Array<number>;
      GroupRoleIds: Array<number>;
      OwnsRoleId: number;
      Recipient: string;
      ContainsPrintable: boolean;
      IsEmailCompatible: boolean;
      IsTextCompatible: boolean;
      IsDocusignable: boolean;
      IsBymCompatible: boolean;
      RecipientIdentifier: string;
      PersonName: string;
      OutputPdf: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SackReference = jsonData.SackReference;
            this.Reference = jsonData.Reference;
            this.FriendlyName = jsonData.FriendlyName;
            var lettersTempArray = _.map(jsonData.Letters, item => { return new Dezrez.DocumentGeneration.Query.LetterDataContract(item);  });
            this.Letters = <Dezrez.DocumentGeneration.Query.LetterDataContract[]>lettersTempArray;

            this.PropertyRoleIds = (<number[]>jsonData.PropertyRoleIds);
            this.GroupRoleIds = (<number[]>jsonData.GroupRoleIds);
            this.OwnsRoleId = jsonData.OwnsRoleId;
            this.Recipient = jsonData.Recipient;
            this.ContainsPrintable = jsonData.ContainsPrintable;
            this.IsEmailCompatible = jsonData.IsEmailCompatible;
            this.IsTextCompatible = jsonData.IsTextCompatible;
            this.IsDocusignable = jsonData.IsDocusignable;
            this.IsBymCompatible = jsonData.IsBymCompatible;
            this.RecipientIdentifier = jsonData.RecipientIdentifier;
            this.PersonName = jsonData.PersonName;
            this.OutputPdf = jsonData.OutputPdf;
         }
   }


   export class EnvelopeEmailDataContract extends Dezrez.DocumentGeneration.Query.EnvelopeDataContract {
      SackReference: string;
      Reference: string;
      FriendlyName: string;
      Letters: Array<Dezrez.DocumentGeneration.Query.LetterDataContract>;
      PropertyRoleIds: Array<number>;
      GroupRoleIds: Array<number>;
      OwnsRoleId: number;
      Recipient: string;
      ContainsPrintable: boolean;
      IsEmailCompatible: boolean;
      IsTextCompatible: boolean;
      IsDocusignable: boolean;
      IsBymCompatible: boolean;
      RecipientIdentifier: string;
      PersonName: string;
      OutputPdf: boolean;
      SendToDrafts: boolean;
      ToContactItemIds: Array<number>;
      FromName: string;
      FromAddress: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.SendToDrafts = jsonData.SendToDrafts;
            this.ToContactItemIds = (<number[]>jsonData.ToContactItemIds);
            this.FromName = jsonData.FromName;
            this.FromAddress = jsonData.FromAddress;
         }
   }


   export class EnvelopePrintDataContract extends Dezrez.DocumentGeneration.Query.EnvelopeDataContract {
      SackReference: string;
      Reference: string;
      FriendlyName: string;
      Letters: Array<Dezrez.DocumentGeneration.Query.LetterDataContract>;
      PropertyRoleIds: Array<number>;
      GroupRoleIds: Array<number>;
      OwnsRoleId: number;
      Recipient: string;
      ContainsPrintable: boolean;
      IsEmailCompatible: boolean;
      IsTextCompatible: boolean;
      IsDocusignable: boolean;
      IsBymCompatible: boolean;
      RecipientIdentifier: string;
      PersonName: string;
      OutputPdf: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class EnvelopeTextDataContract extends Dezrez.DocumentGeneration.Query.EnvelopeDataContract {
      SackReference: string;
      Reference: string;
      FriendlyName: string;
      Letters: Array<Dezrez.DocumentGeneration.Query.LetterDataContract>;
      PropertyRoleIds: Array<number>;
      GroupRoleIds: Array<number>;
      OwnsRoleId: number;
      Recipient: string;
      ContainsPrintable: boolean;
      IsEmailCompatible: boolean;
      IsTextCompatible: boolean;
      IsDocusignable: boolean;
      IsBymCompatible: boolean;
      RecipientIdentifier: string;
      PersonName: string;
      OutputPdf: boolean;
      ToContactItemIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToContactItemIds = (<number[]>jsonData.ToContactItemIds);
         }
   }


   export class GroupedEnvelopeDataContract {
      PersonName: string;
      EnvelopeDataContracts: Array<Dezrez.DocumentGeneration.Query.EnvelopeContainerDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PersonName = jsonData.PersonName;
            var envelopeDataContractsTempArray = _.map(jsonData.EnvelopeDataContracts, item => { return new Dezrez.DocumentGeneration.Query.EnvelopeContainerDataContract(item);  });
            this.EnvelopeDataContracts = <Dezrez.DocumentGeneration.Query.EnvelopeContainerDataContract[]>envelopeDataContractsTempArray;

         }
   }


   export class LetterDataContract {
      Partition: number;
      Reference: string;
      Filename: string;
      FileExtension: string;
      TemplateType: Dezrez.System.EnumDataContract;
      ContentType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Partition = jsonData.Partition;
            this.Reference = jsonData.Reference;
            this.Filename = jsonData.Filename;
            this.FileExtension = jsonData.FileExtension;
            this.TemplateType = new Dezrez.System.EnumDataContract(jsonData.TemplateType);
            this.ContentType = jsonData.ContentType;
         }
   }


   export class EnvelopeErrorDataContract extends Dezrez.DocumentGeneration.Query.EnvelopeDataContract {
      SackReference: string;
      Reference: string;
      FriendlyName: string;
      Letters: Array<Dezrez.DocumentGeneration.Query.LetterDataContract>;
      PropertyRoleIds: Array<number>;
      GroupRoleIds: Array<number>;
      OwnsRoleId: number;
      Recipient: string;
      ContainsPrintable: boolean;
      IsEmailCompatible: boolean;
      IsTextCompatible: boolean;
      IsDocusignable: boolean;
      IsBymCompatible: boolean;
      RecipientIdentifier: string;
      PersonName: string;
      OutputPdf: boolean;
      ErrorMessage: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ErrorMessage = jsonData.ErrorMessage;
         }
   }


   export class GeneratededSackDataContract {
      FriendlyName: string;
      GroupedEnvelopeDataContracts: Array<Dezrez.DocumentGeneration.Query.GroupedEnvelopeDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.FriendlyName = jsonData.FriendlyName;
            var groupedEnvelopeDataContractsTempArray = _.map(jsonData.GroupedEnvelopeDataContracts, item => { return new Dezrez.DocumentGeneration.Query.GroupedEnvelopeDataContract(item);  });
            this.GroupedEnvelopeDataContracts = <Dezrez.DocumentGeneration.Query.GroupedEnvelopeDataContract[]>groupedEnvelopeDataContractsTempArray;

         }
   }

}

export module Dezrez.DocumentGeneration.CreateEpc {

   export class CreateEpcDataContract {
      RoleId: number;
      EPCType: Dezrez.System.EnumDataContract;
      EERCurrent: number;
      EERPotential: number;
      EIRCurrent: number;
      EIRPotential: number;
      CurrentEPCDocumentId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.EPCType = new Dezrez.System.EnumDataContract(jsonData.EPCType);
            this.EERCurrent = jsonData.EERCurrent;
            this.EERPotential = jsonData.EERPotential;
            this.EIRCurrent = jsonData.EIRCurrent;
            this.EIRPotential = jsonData.EIRPotential;
            this.CurrentEPCDocumentId = jsonData.CurrentEPCDocumentId;
         }
   }

}

export module Dezrez.DocumentGeneration.CreatePdf {

   export class CreatePdfDataContract {
      Pages: Array<string>;
      StyleBlocks: Array<string>;
      CssFiles: Array<string>;
      Width: number;
      Height: number;
      PageSize: string;
      PageOrientation: string;
      PdfName: string;
      RoleId: number;
      BaseUrl: string;
      RootPath: string;
      UseNew: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Pages = (<string[]>jsonData.Pages);
            this.StyleBlocks = (<string[]>jsonData.StyleBlocks);
            this.CssFiles = (<string[]>jsonData.CssFiles);
            this.Width = jsonData.Width;
            this.Height = jsonData.Height;
            this.PageSize = jsonData.PageSize;
            this.PageOrientation = jsonData.PageOrientation;
            this.PdfName = jsonData.PdfName;
            this.RoleId = jsonData.RoleId;
            this.BaseUrl = jsonData.BaseUrl;
            this.RootPath = jsonData.RootPath;
            this.UseNew = jsonData.UseNew;
         }
   }

}

export module Dezrez.DocumentGeneration.MergeFunction {

   export class MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Label = jsonData.Label;
            this.Description = jsonData.Description;
            this.Default = jsonData.Default;
         }
   }


   export class MergeFunctionParameterControlCheckBoxDataContract extends Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class MergeFunctionParameterControlReadOnlyDataContract extends Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class MergeFunctionParameterControlSelectDataContract extends Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      Values: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Values = jsonData.Values;
         }
   }


   export class MergeFunctionParameterControlSpinnerDataContract extends Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      Minimum: number;
      Maximum: number;
      Unit: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Minimum = jsonData.Minimum;
            this.Maximum = jsonData.Maximum;
            this.Unit = jsonData.Unit;
         }
   }


   export class MergeFunctionParameterControlTextDataContract extends Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class MergeFunctionParameterControlColourDataContract extends Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract {
      Label: string;
      Description: string;
      Default: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class LetterEditorDataContract {
      DezrezMappings: any;
      MetaData: Array<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionMetadataDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.DezrezMappings = jsonData.DezrezMappings;
            var metaDataTempArray = _.map(jsonData.MetaData, item => { return new Dezrez.DocumentGeneration.MergeFunction.MergeFunctionMetadataDataContract(item);  });
            this.MetaData = <Dezrez.DocumentGeneration.MergeFunction.MergeFunctionMetadataDataContract[]>metaDataTempArray;

         }
   }


   export class MergeFunctionMetadataDataContract {
      Name: string;
      Label: string;
      Image: string;
      ScreenTip: string;
      SuperTip: string;
      ReturnType: string;
      FunctionHandler: string;
      MenuGroup: string;
      CompulsoryParameters: boolean;
      FieldTypes: Array<Dezrez.System.EnumDataContract>;
      Controls: Array<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract>;

      public mergeFunctionParameterControlCheckBoxDataContract: Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlCheckBoxDataContract;
      get MergeFunctionParameterControlCheckBoxDataContractData(): Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlCheckBoxDataContract {
         if (this.Controls && this.Controls.length) {
            return (this.mergeFunctionParameterControlCheckBoxDataContract || (this.mergeFunctionParameterControlCheckBoxDataContract = this.getType<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlCheckBoxDataContract>(this.Controls, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MergeFunctionParameterControlCheckBoxDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public mergeFunctionParameterControlReadOnlyDataContract: Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlReadOnlyDataContract;
      get MergeFunctionParameterControlReadOnlyDataContractData(): Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlReadOnlyDataContract {
         if (this.Controls && this.Controls.length) {
            return (this.mergeFunctionParameterControlReadOnlyDataContract || (this.mergeFunctionParameterControlReadOnlyDataContract = this.getType<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlReadOnlyDataContract>(this.Controls, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MergeFunctionParameterControlReadOnlyDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public mergeFunctionParameterControlSelectDataContract: Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlSelectDataContract;
      get MergeFunctionParameterControlSelectDataContractData(): Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlSelectDataContract {
         if (this.Controls && this.Controls.length) {
            return (this.mergeFunctionParameterControlSelectDataContract || (this.mergeFunctionParameterControlSelectDataContract = this.getType<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlSelectDataContract>(this.Controls, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MergeFunctionParameterControlSelectDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public mergeFunctionParameterControlSpinnerDataContract: Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlSpinnerDataContract;
      get MergeFunctionParameterControlSpinnerDataContractData(): Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlSpinnerDataContract {
         if (this.Controls && this.Controls.length) {
            return (this.mergeFunctionParameterControlSpinnerDataContract || (this.mergeFunctionParameterControlSpinnerDataContract = this.getType<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlSpinnerDataContract>(this.Controls, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MergeFunctionParameterControlSpinnerDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public mergeFunctionParameterControlTextDataContract: Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlTextDataContract;
      get MergeFunctionParameterControlTextDataContractData(): Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlTextDataContract {
         if (this.Controls && this.Controls.length) {
            return (this.mergeFunctionParameterControlTextDataContract || (this.mergeFunctionParameterControlTextDataContract = this.getType<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlTextDataContract>(this.Controls, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MergeFunctionParameterControlTextDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public mergeFunctionParameterControlColourDataContract: Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlColourDataContract;
      get MergeFunctionParameterControlColourDataContractData(): Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlColourDataContract {
         if (this.Controls && this.Controls.length) {
            return (this.mergeFunctionParameterControlColourDataContract || (this.mergeFunctionParameterControlColourDataContract = this.getType<Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlColourDataContract>(this.Controls, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MergeFunctionParameterControlColourDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Label = jsonData.Label;
            this.Image = jsonData.Image;
            this.ScreenTip = jsonData.ScreenTip;
            this.SuperTip = jsonData.SuperTip;
            this.ReturnType = jsonData.ReturnType;
            this.FunctionHandler = jsonData.FunctionHandler;
            this.MenuGroup = jsonData.MenuGroup;
            this.CompulsoryParameters = jsonData.CompulsoryParameters;
            var fieldTypesTempArray = _.map(jsonData.FieldTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.FieldTypes = <Dezrez.System.EnumDataContract[]>fieldTypesTempArray;

            var controlsTempArray = _.map(jsonData.Controls, (item: any) => {
               return new Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract(item);
            });
            this.Controls = <Dezrez.DocumentGeneration.MergeFunction.MergeFunctionParameterControlDataContract[]>controlsTempArray;

         }
   }

}

export module Dezrez.Document.Command {

   export class RenameDocumentCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      DocumentId: number;
      FileName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DocumentId = jsonData.DocumentId;
            this.FileName = jsonData.FileName;
         }
   }


   export class SetDocumentPrivacyCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      DocumentId: number;
      SetAsPublic: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DocumentId = jsonData.DocumentId;
            this.SetAsPublic = jsonData.SetAsPublic;
         }
   }

}

export module Dezrez.Events.Query {

   export class BaseEventDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      Name: string;
      Description: string;
      DateTime: DateHelper;
      EventCategory: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      EventStatus: Dezrez.System.EnumDataContract;
      Negotiators: Array<Dezrez.Events.Query.ListNegotiatorDataContract>;
      BranchId: number;
      OwningTeamId: number;
      TeamAccessType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.EventCategory = new Dezrez.System.EnumDataContract(jsonData.EventCategory);
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
            this.EventStatus = new Dezrez.System.EnumDataContract(jsonData.EventStatus);
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Events.Query.ListNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Events.Query.ListNegotiatorDataContract[]>negotiatorsTempArray;

            this.BranchId = jsonData.BranchId;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.TeamAccessType = jsonData.TeamAccessType;
         }
   }


   export class EventTypeDataContract extends Dezrez.System.EnumDataContract {
      Id: number;
      Name: string;
      SystemName: string;
      EventCategory: Dezrez.Events.Query.EventTypeCategoryDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventCategory = new Dezrez.Events.Query.EventTypeCategoryDataContract(jsonData.EventCategory);
         }
   }


   export class EventTypeCategoryDataContract {
      Id: number;
      Name: string;
      SystemName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.SystemName = jsonData.SystemName;
         }
   }


   export class EventDataContract extends Dezrez.Events.Query.BaseEventDataContract {
      Name: string;
      Description: string;
      DateTime: DateHelper;
      EventCategory: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      EventStatus: Dezrez.System.EnumDataContract;
      Negotiators: Array<Dezrez.Events.Query.ListNegotiatorDataContract>;
      BranchId: number;
      OwningTeamId: number;
      TeamAccessType: string;
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Team = new Dezrez.Events.Query.EventTeamDataContract(jsonData.Team);
            var notesTempArray = _.map(jsonData.Notes, item => { return new Dezrez.Events.Command.EventNoteCommandDataContract(item);  });
            this.Notes = <Dezrez.Events.Command.EventNoteCommandDataContract[]>notesTempArray;

            var documentsTempArray = _.map(jsonData.Documents, (item: any) => {
               return new Dezrez.Media.DocumentDataContract(item);
            });
            this.Documents = <Dezrez.Media.DocumentDataContract[]>documentsTempArray;

         }
   }


   export class EventTeamDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class EventNoteQueryDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Note: string;
      DateAdded: DateHelper;
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Note = jsonData.Note;
            this.DateAdded = new DateHelper(jsonData.DateAdded, null, true);
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }


   export class ListNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ContactName: string;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ContactName = jsonData.ContactName;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class ListPersonDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
         }
   }


   export class NoteDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      Pinned: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Pinned = jsonData.Pinned;
         }
   }

}

export module Dezrez.Events.Appointments.Query {

   export class AppointmentDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Address: Dezrez.Location.Query.AddressDataContract;
      MeetingPlace: Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract;
      AttendingGroups: Array<Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract>;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;
      MarketingRoleId: number;
      PropertyId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AllDayEvent = jsonData.AllDayEvent;
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.MeetingPlace = new Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract(jsonData.MeetingPlace);
            var attendingGroupsTempArray = _.map(jsonData.AttendingGroups, item => { return new Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract(item);  });
            this.AttendingGroups = <Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract[]>attendingGroupsTempArray;

            var specialArrangementsTempArray = _.map(jsonData.SpecialArrangements, item => { return new Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract(item);  });
            this.SpecialArrangements = <Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract[]>specialArrangementsTempArray;

            var rolesTempArray = _.map(jsonData.Roles, item => { return new Dezrez.Role.Query.Get.RoleDataContract(item);  });
            this.Roles = <Dezrez.Role.Query.Get.RoleDataContract[]>rolesTempArray;

            this.MarketingRoleId = jsonData.MarketingRoleId;
            this.PropertyId = jsonData.PropertyId;
         }
   }


   export class AuctionDataContract extends Dezrez.Events.Appointments.Query.AppointmentDataContract {
      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Address: Dezrez.Location.Query.AddressDataContract;
      MeetingPlace: Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract;
      AttendingGroups: Array<Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract>;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;
      MarketingRoleId: number;
      PropertyId: number;
      CutOffDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CutOffDate = new DateHelper(jsonData.CutOffDate, null, true);
         }
   }


   export class AppointmentAttendeeCollectionDataContract {
      Type: Dezrez.System.EnumDataContract;
      Group: Dezrez.Events.Appointments.Query.AppointmentAttendeeGroupDataContract;
      AttendingPeople: Array<Dezrez.Events.Appointments.Query.AppointmentAttendeePersonDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Group = new Dezrez.Events.Appointments.Query.AppointmentAttendeeGroupDataContract(jsonData.Group);
            var attendingPeopleTempArray = _.map(jsonData.AttendingPeople, item => { return new Dezrez.Events.Appointments.Query.AppointmentAttendeePersonDataContract(item);  });
            this.AttendingPeople = <Dezrez.Events.Appointments.Query.AppointmentAttendeePersonDataContract[]>attendingPeopleTempArray;

         }
   }


   export class AppointmentAttendeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
         }
   }


   export class AppointmentAttendeeGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      PrimaryGroupMember: Dezrez.Events.Appointments.Query.AppointmentAttendeePersonDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.PrimaryGroupMember = new Dezrez.Events.Appointments.Query.AppointmentAttendeePersonDataContract(jsonData.PrimaryGroupMember);
         }
   }


   export class AppointmentAttendeePersonDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ContactName: string;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ContactName = jsonData.ContactName;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
         }
   }


   export class AppointmentSummaryNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
         }
   }


   export class AppointmentSummaryDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      DateTime: DateHelper;
      StartDate: DateHelper;
      EndDate: DateHelper;
      IsAllDay: boolean;
      EventType: Dezrez.System.EnumDataContract;
      EventStatus: Dezrez.System.EnumDataContract;
      Negotiators: Array<Dezrez.Events.Appointments.Query.AppointmentSummaryNegotiatorDataContract>;
      MeetingPlace: Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.IsAllDay = jsonData.IsAllDay;
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
            this.EventStatus = new Dezrez.System.EnumDataContract(jsonData.EventStatus);
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Events.Appointments.Query.AppointmentSummaryNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Events.Appointments.Query.AppointmentSummaryNegotiatorDataContract[]>negotiatorsTempArray;

            this.MeetingPlace = new Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract(jsonData.MeetingPlace);
         }
   }


   export class AppointmentGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      Notes: string;
      Members: Array<Dezrez.Events.Appointments.Query.AppointmentGroupMemberDataContract>;
      BranchId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.Notes = jsonData.Notes;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Events.Appointments.Query.AppointmentGroupMemberDataContract(item);  });
            this.Members = <Dezrez.Events.Appointments.Query.AppointmentGroupMemberDataContract[]>membersTempArray;

            this.BranchId = jsonData.BranchId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
         }
   }


   export class AppointmentGroupMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      RelationshipType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.RelationshipType = new Dezrez.System.EnumDataContract(jsonData.RelationshipType);
         }
   }


   export class AppointmentRoleDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
         }
   }


   export class EventDataFilter {
      NegotiatorIds: Array<number>;
      From: DateHelper;
      To: DateHelper;
      EventCategoryType: Array<string>;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.EventCategoryType = (<string[]>jsonData.EventCategoryType);
            this.BranchId = jsonData.BranchId;
         }
   }


   export class ValuationDataContract extends Dezrez.Events.Appointments.Query.AppointmentDataContract {
      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Address: Dezrez.Location.Query.AddressDataContract;
      MeetingPlace: Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract;
      AttendingGroups: Array<Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract>;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;
      MarketingRoleId: number;
      PropertyId: number;
      Feedback: Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackDataContract;
      Values: Array<Dezrez.Events.Progression.Query.ValuedDataContract>;
      ValuationNote: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Feedback = new Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackDataContract(jsonData.Feedback);
            var valuesTempArray = _.map(jsonData.Values, item => { return new Dezrez.Events.Progression.Query.ValuedDataContract(item);  });
            this.Values = <Dezrez.Events.Progression.Query.ValuedDataContract[]>valuesTempArray;

            this.ValuationNote = jsonData.ValuationNote;
         }
   }

}

export module Dezrez.Events.Appointments.Command {

   export class SaveAppointmentCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      PropertyId: number;
      RoleId: number;
      AppointmentDetail: Dezrez.Events.Appointments.Command.AppointmentDetailCommandDataContract;
      EventType: string;
      ReasonOfCancellation: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.PropertyId = jsonData.PropertyId;
            this.RoleId = jsonData.RoleId;
            this.AppointmentDetail = new Dezrez.Events.Appointments.Command.AppointmentDetailCommandDataContract(jsonData.AppointmentDetail);
            this.EventType = jsonData.EventType;
            this.ReasonOfCancellation = jsonData.ReasonOfCancellation;
         }
   }


   export class AppointmentAttendeeCommandDataContract {
      Type: Dezrez.System.EnumDataContract;
      Group: Dezrez.Group.Command.AddGroup.AddGroupCommandDataContract;
      AttendingPeopleIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Group = new Dezrez.Group.Command.AddGroup.AddGroupCommandDataContract(jsonData.Group);
            this.AttendingPeopleIds = (<number[]>jsonData.AttendingPeopleIds);
         }
   }


   export class CancelAppointmentCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ReasonForCancellation: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ReasonForCancellation = jsonData.ReasonForCancellation;
         }
   }


   export class DeleteAppointmentCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ReasonForDeletion: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ReasonForDeletion = jsonData.ReasonForDeletion;
         }
   }


   export class AppointmentDetailCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      EventStatus: Dezrez.System.EnumDataContract;
      MeetingPlaceId: number;
      TeamId: number;
      NegotiatorIds: Array<number>;
      AttendingGroups: Array<Dezrez.Events.Appointments.Command.AppointmentAttendeeCommandDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Command.SpecialArrangementCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.AllDayEvent = jsonData.AllDayEvent;
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.EventStatus = new Dezrez.System.EnumDataContract(jsonData.EventStatus);
            this.MeetingPlaceId = jsonData.MeetingPlaceId;
            this.TeamId = jsonData.TeamId;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            var attendingGroupsTempArray = _.map(jsonData.AttendingGroups, item => { return new Dezrez.Events.Appointments.Command.AppointmentAttendeeCommandDataContract(item);  });
            this.AttendingGroups = <Dezrez.Events.Appointments.Command.AppointmentAttendeeCommandDataContract[]>attendingGroupsTempArray;

            var specialArrangementsTempArray = _.map(jsonData.SpecialArrangements, item => { return new Dezrez.SpecialArrangements.Command.SpecialArrangementCommandDataContract(item);  });
            this.SpecialArrangements = <Dezrez.SpecialArrangements.Command.SpecialArrangementCommandDataContract[]>specialArrangementsTempArray;

         }
   }


   export class SaveAuctionCommandDataContract extends Dezrez.Events.Appointments.Command.SaveAppointmentCommandDataContract {
      Name: string;
      Description: string;
      PropertyId: number;
      RoleId: number;
      AppointmentDetail: Dezrez.Events.Appointments.Command.AppointmentDetailCommandDataContract;
      EventType: string;
      ReasonOfCancellation: string;
      CutOffDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CutOffDate = new DateHelper(jsonData.CutOffDate, null, true);
         }
   }

}

export module Dezrez.Events.Command {

   export class AddNoteEventCommandDataContract {
      RoleId: number;
      GroupId: number;
      Title: string;
      Notes: string;
      NegotiatorIds: Array<number>;
      Pinned: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.GroupId = jsonData.GroupId;
            this.Title = jsonData.Title;
            this.Notes = jsonData.Notes;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.Pinned = jsonData.Pinned;
         }
   }


   export class AddNoteToEventCommandDataContract {
      Note: string;
      NegotiatorId: number;
      CreationDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Note = jsonData.Note;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.CreationDate = new DateHelper(jsonData.CreationDate, null, true);
         }
   }


   export class EventNoteCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Note: string;
      DateAdded: DateHelper;
      NegotiatorId: number;
      NegotiatorEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Note = jsonData.Note;
            this.DateAdded = new DateHelper(jsonData.DateAdded, null, true);
            this.NegotiatorId = jsonData.NegotiatorId;
            this.NegotiatorEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.NegotiatorEmail);
         }
   }


   export class SetEventNegotiatorsCommandDataContract {
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class AddChatMessageCommandDataContract {
      PropertyRoleIds: Array<number>;
      Groups: Array<Dezrez.Events.Command.ChatMessageGroupComandDataContract>;
      Message: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyRoleIds = (<number[]>jsonData.PropertyRoleIds);
            var groupsTempArray = _.map(jsonData.Groups, item => { return new Dezrez.Events.Command.ChatMessageGroupComandDataContract(item);  });
            this.Groups = <Dezrez.Events.Command.ChatMessageGroupComandDataContract[]>groupsTempArray;

            this.Message = jsonData.Message;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class ChatMessageGroupComandDataContract {
      GroupId: number;
      RoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.RoleId = jsonData.RoleId;
         }
   }

}

export module Dezrez.Group.Command.Delete {

   export class GroupMemberDeleteCommandDataContract {
      Id: number;
      Reason: Dezrez.System.EnumDataContract;
      Note: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Reason = new Dezrez.System.EnumDataContract(jsonData.Reason);
            this.Note = jsonData.Note;
         }
   }


   export class GroupDeleteCommandDataContract {
      Id: number;
      Reason: string;
      Notes: string;
      ForceUpdate: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Reason = jsonData.Reason;
            this.Notes = jsonData.Notes;
            this.ForceUpdate = jsonData.ForceUpdate;
         }
   }

}

export module Dezrez.Events.Appointments.Command.MultiViewing {

   export class BookMultiViewingResponseDataContract {
      GroupIds: Array<number>;
      IsSuccess: boolean;
      MultiViewingAppointmentId: number;
      RoleIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupIds = (<number[]>jsonData.GroupIds);
            this.IsSuccess = jsonData.IsSuccess;
            this.MultiViewingAppointmentId = jsonData.MultiViewingAppointmentId;
            this.RoleIds = (<number[]>jsonData.RoleIds);
         }
   }


   export class SaveMultiViewingAppointmentDataContract extends Dezrez.Events.Appointments.Command.AppointmentDetailCommandDataContract {
      Name: string;
      Description: string;
      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      EventStatus: Dezrez.System.EnumDataContract;
      MeetingPlaceId: number;
      TeamId: number;
      NegotiatorIds: Array<number>;
      AttendingGroups: Array<Dezrez.Events.Appointments.Command.AppointmentAttendeeCommandDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Command.SpecialArrangementCommandDataContract>;
      TimePerViewing: number;
      PotentialViewings: Array<Dezrez.Events.Appointments.Query.Viewing.MultiViewing.ViewingSlotDataContract>;
      IsOpenHouse: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TimePerViewing = jsonData.TimePerViewing;
            var potentialViewingsTempArray = _.map(jsonData.PotentialViewings, item => { return new Dezrez.Events.Appointments.Query.Viewing.MultiViewing.ViewingSlotDataContract(item);  });
            this.PotentialViewings = <Dezrez.Events.Appointments.Query.Viewing.MultiViewing.ViewingSlotDataContract[]>potentialViewingsTempArray;

            this.IsOpenHouse = jsonData.IsOpenHouse;
         }
   }

}

export module Dezrez.SpecialArrangements.Command {

   export class SpecialArrangementCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Text: string;
      SpecialArrangementType: Dezrez.System.EnumDataContract;
      ApplicableToGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Text = jsonData.Text;
            this.SpecialArrangementType = new Dezrez.System.EnumDataContract(jsonData.SpecialArrangementType);
            this.ApplicableToGroupIds = (<number[]>jsonData.ApplicableToGroupIds);
         }
   }

}

export module Dezrez.Events.Appointments.Command.Viewing {

   export class SaveFeedbackCommandDataContract {
      FeedbackId: number;
      Feedback: string;
      FeedbackDate: DateHelper;
      NegIds: Array<number>;
      Impression: Dezrez.System.EnumDataContract;
      ApplicableToGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.FeedbackId = jsonData.FeedbackId;
            this.Feedback = jsonData.Feedback;
            this.FeedbackDate = new DateHelper(jsonData.FeedbackDate, null, true);
            this.NegIds = (<number[]>jsonData.NegIds);
            this.Impression = new Dezrez.System.EnumDataContract(jsonData.Impression);
            this.ApplicableToGroupIds = (<number[]>jsonData.ApplicableToGroupIds);
         }
   }


   export class BookViewingResponseDataContract {
      RoleId: number;
      GroupIds: Array<number>;
      ViewingAppointmentId: number;
      IsSuccess: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.GroupIds = (<number[]>jsonData.GroupIds);
            this.ViewingAppointmentId = jsonData.ViewingAppointmentId;
            this.IsSuccess = jsonData.IsSuccess;
         }
   }

}

export module Dezrez.Location.Command {

   export class AddFavouriteRegionCommandDataContract {
      RegionId: number;
      GlobalRegion: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RegionId = jsonData.RegionId;
            this.GlobalRegion = jsonData.GlobalRegion;
         }
   }


   export class AddressSaveCommandDataContract extends Dezrez.Location.BaseAddressDataContract {
      AddressSource: Dezrez.System.EnumDataContract;
      SourceId: string;
      OrganizationName: string;
      Number: string;
      BuildingName: string;
      Street: string;
      Town: string;
      Locality: string;
      County: string;
      Postcode: string;
      Latitude: number;
      Longitude: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
         }
   }


   export class ContactAddressSaveCommandDataContract extends Dezrez.Location.Command.AddressSaveCommandDataContract {
      Latitude: number;
      Longitude: number;
      ContactOrder: number;
      AddressType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ContactOrder = jsonData.ContactOrder;
            this.AddressType = new Dezrez.System.EnumDataContract(jsonData.AddressType);
         }
   }


   export class PoiSaveCommandDataContract extends Dezrez.Location.BasePoiDataContract {
      Name: string;
      PrimaryType: Dezrez.System.EnumDataContract;
      Types: Array<Dezrez.System.EnumDataContract>;
      Latitude: number;
      Longitude: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
         }
   }


   export class RegionSaveCommandDataContract extends Dezrez.Location.Query.RegionDataContract {
      Name: string;
      Title: string;
      Polyline: string;
      RegionSource: number;
      Type: Dezrez.System.EnumDataContract;
      Location: Dezrez.Location.Query.LocationDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class RegionAliasSaveCommandDataContract extends Dezrez.Location.Query.RegionAliasDataContract {
      Name: string;
      Title: string;
      OriginalId: string;
      OriginalName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class GlobalRegionSaveCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ProviderId: number;
      SourceId: string;
      Name: string;
      Title: string;
      LegacyId: string;
      Type: number;
      CenterLatitude: number;
      CenterLongitude: number;
      Polyline: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ProviderId = jsonData.ProviderId;
            this.SourceId = jsonData.SourceId;
            this.Name = jsonData.Name;
            this.Title = jsonData.Title;
            this.LegacyId = jsonData.LegacyId;
            this.Type = jsonData.Type;
            this.CenterLatitude = jsonData.CenterLatitude;
            this.CenterLongitude = jsonData.CenterLongitude;
            this.Polyline = jsonData.Polyline;
         }
   }


   export class SaveTagLocationMatchCommandDataContract {
      Location: Dezrez.Location.Query.LocationSuggestDataContract;
      Tag: Dezrez.System.TagDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Location = new Dezrez.Location.Query.LocationSuggestDataContract(jsonData.Location);
            this.Tag = new Dezrez.System.TagDataContract(jsonData.Tag);
         }
   }

}

export module Dezrez.Location.Command.AddEditViewPoints {

   export class AddEditViewPointCommandDataContract extends Dezrez.Location.Query.ViewPointDataContract {
      Point: Dezrez.Location.Query.PointDataContract;
      Pitch: number;
      Heading: number;
      FieldOfVision: number;
      Zoom: number;
      Label: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class AddEditViewPointPointDataContract extends Dezrez.Location.Query.PointDataContract {
      Latitude: number;
      Longitude: number;
      Altitude: number;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }

}

export module Dezrez.Negotiators.Query.AppointmentSummary {

   export class NegotiatorEventCountDataContract {
      Interval: Enums.DateInterval;
      NegotiatorIds: Array<number>;
      StartDate: DateHelper;
      EndDate: DateHelper;
      EventCategory: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      RoleType: Dezrez.System.EnumDataContract;
      BranchId: number;
      IncludeDrafts: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Interval = <Enums.DateInterval>(jsonData.Interval);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.EventCategory = new Dezrez.System.EnumDataContract(jsonData.EventCategory);
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.BranchId = jsonData.BranchId;
            this.IncludeDrafts = jsonData.IncludeDrafts;
         }
   }


   export class NegotiatorEventCountResultDataContract {
      DateTime: DateHelper;
      Count: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.Count = jsonData.Count;
         }
   }

}

export module Dezrez.Negotiators.Query.Favourite {

   export class FavouriteGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      GroupIcon: Dezrez.System.EnumDataContract;
      GroupType: Dezrez.System.EnumDataContract;
      PrimaryGroupMember: Dezrez.Group.Query.Get.GroupMemberDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.PrimaryGroupMember = new Dezrez.Group.Query.Get.GroupMemberDataContract(jsonData.PrimaryGroupMember);
         }
   }


   export class FavouritePropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Description: string;
      PropertyMarketingRoleId: number;
      RoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Description = jsonData.Description;
            this.PropertyMarketingRoleId = jsonData.PropertyMarketingRoleId;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
         }
   }

}

export module Dezrez.Negotiators.Command {

   export class EditNegotiatorCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Initials: string;
      JobTitle: string;
      ContactName: string;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Initials = jsonData.Initials;
            this.JobTitle = jsonData.JobTitle;
            this.ContactName = jsonData.ContactName;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
         }
   }


   export class CreateNegotiatorCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Initials: string;
      JobTitle: string;
      ContactName: string;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LegalName: string;
      LastName: string;
      Password: string;
      HomeBranchID: number;
      EmailAddress: string;
      Responsibilities: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Initials = jsonData.Initials;
            this.JobTitle = jsonData.JobTitle;
            this.ContactName = jsonData.ContactName;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LegalName = jsonData.LegalName;
            this.LastName = jsonData.LastName;
            this.Password = jsonData.Password;
            this.HomeBranchID = jsonData.HomeBranchID;
            this.EmailAddress = jsonData.EmailAddress;
            var responsibilitiesTempArray = _.map(jsonData.Responsibilities, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Responsibilities = <Dezrez.System.EnumDataContract[]>responsibilitiesTempArray;

         }
   }


   export class SaveNegotiatorPreferenceEmailDataContract {
      SyncFlagged: boolean;
      SyncFolder: boolean;
      SyncInlineImages: boolean;
      SmtpUsername: string;
      SmptPassword: string;
      ImapUsername: string;
      ImapPassword: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SyncFlagged = jsonData.SyncFlagged;
            this.SyncFolder = jsonData.SyncFolder;
            this.SyncInlineImages = jsonData.SyncInlineImages;
            this.SmtpUsername = jsonData.SmtpUsername;
            this.SmptPassword = jsonData.SmptPassword;
            this.ImapUsername = jsonData.ImapUsername;
            this.ImapPassword = jsonData.ImapPassword;
         }
   }


   export class SaveNegotiatorPreferenceNotificationsDataContract {
      ByEmail: boolean;
      BySms: boolean;
      ByNotification: boolean;
      NotifyOf: Array<Dezrez.Negotiators.Query.Get.BoolTypePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ByEmail = jsonData.ByEmail;
            this.BySms = jsonData.BySms;
            this.ByNotification = jsonData.ByNotification;
            var notifyOfTempArray = _.map(jsonData.NotifyOf, item => { return new Dezrez.Negotiators.Query.Get.BoolTypePairDataContract(item);  });
            this.NotifyOf = <Dezrez.Negotiators.Query.Get.BoolTypePairDataContract[]>notifyOfTempArray;

         }
   }


   export class SaveNegotiatorPreferenceRemindersDataContract {
      ByEmail: boolean;
      BySms: boolean;
      ByNotification: boolean;
      When: Array<Dezrez.Negotiators.Query.Get.BoolTypePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ByEmail = jsonData.ByEmail;
            this.BySms = jsonData.BySms;
            this.ByNotification = jsonData.ByNotification;
            var whenTempArray = _.map(jsonData.When, item => { return new Dezrez.Negotiators.Query.Get.BoolTypePairDataContract(item);  });
            this.When = <Dezrez.Negotiators.Query.Get.BoolTypePairDataContract[]>whenTempArray;

         }
   }


   export class SaveNegotiatorPreferencesCommandDataContract {
      CalendarViews: Array<Dezrez.Negotiators.Query.Get.NegotiatorPreferencesCalendarViewDataContract>;
      Reminders: Dezrez.Negotiators.Command.SaveNegotiatorPreferenceRemindersDataContract;
      Notifications: Dezrez.Negotiators.Command.SaveNegotiatorPreferenceNotificationsDataContract;
      Email: Dezrez.Negotiators.Command.SaveNegotiatorPreferenceEmailDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var calendarViewsTempArray = _.map(jsonData.CalendarViews, item => { return new Dezrez.Negotiators.Query.Get.NegotiatorPreferencesCalendarViewDataContract(item);  });
            this.CalendarViews = <Dezrez.Negotiators.Query.Get.NegotiatorPreferencesCalendarViewDataContract[]>calendarViewsTempArray;

            this.Reminders = new Dezrez.Negotiators.Command.SaveNegotiatorPreferenceRemindersDataContract(jsonData.Reminders);
            this.Notifications = new Dezrez.Negotiators.Command.SaveNegotiatorPreferenceNotificationsDataContract(jsonData.Notifications);
            this.Email = new Dezrez.Negotiators.Command.SaveNegotiatorPreferenceEmailDataContract(jsonData.Email);
         }
   }

}

export module Dezrez.People.Query.Get {

   export class GroupMembershipGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      SystemStatus: Dezrez.System.EnumDataContract;
      GroupBackgroundImageUrl: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.SystemStatus = new Dezrez.System.EnumDataContract(jsonData.SystemStatus);
            this.GroupBackgroundImageUrl = jsonData.GroupBackgroundImageUrl;
         }
   }


   export class ContactDetailsDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Addresses: Array<Dezrez.People.Query.Get.ContactAddressDataContract>;
      ContactItems: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var addressesTempArray = _.map(jsonData.Addresses, item => { return new Dezrez.People.Query.Get.ContactAddressDataContract(item);  });
            this.Addresses = <Dezrez.People.Query.Get.ContactAddressDataContract[]>addressesTempArray;

            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.ContactItems = <Dezrez.People.Query.Get.ContactItemDataContract[]>contactItemsTempArray;

         }
   }


   export class GroupMembershipDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Group: Dezrez.People.Query.Get.GroupMembershipGroupDataContract;
      RelationshipType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Group = new Dezrez.People.Query.Get.GroupMembershipGroupDataContract(jsonData.Group);
            this.RelationshipType = new Dezrez.System.EnumDataContract(jsonData.RelationshipType);
         }
   }


   export class ContactItemDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Type: Dezrez.System.EnumDataContract;
      Value: string;
      Notes: string;
      ContactOrder: number;
      AllowContact: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Value = jsonData.Value;
            this.Notes = jsonData.Notes;
            this.ContactOrder = jsonData.ContactOrder;
            this.AllowContact = jsonData.AllowContact;
         }
   }


   export class CreatedByDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Initials: string;
      ContactName: string;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Initials = jsonData.Initials;
            this.ContactName = jsonData.ContactName;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class PersonDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Note: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      GroupCount: number;
      GroupMemberships: Array<Dezrez.People.Query.Get.GroupMembershipDataContract>;
      ContactItems: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      Addresses: Array<Dezrez.People.Query.Get.ContactAddressDataContract>;
      ArchivedAddresses: Array<Dezrez.People.Query.Get.ContactAddressDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.Note = jsonData.Note;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.GroupCount = jsonData.GroupCount;
            var groupMembershipsTempArray = _.map(jsonData.GroupMemberships, item => { return new Dezrez.People.Query.Get.GroupMembershipDataContract(item);  });
            this.GroupMemberships = <Dezrez.People.Query.Get.GroupMembershipDataContract[]>groupMembershipsTempArray;

            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.ContactItems = <Dezrez.People.Query.Get.ContactItemDataContract[]>contactItemsTempArray;

            var addressesTempArray = _.map(jsonData.Addresses, item => { return new Dezrez.People.Query.Get.ContactAddressDataContract(item);  });
            this.Addresses = <Dezrez.People.Query.Get.ContactAddressDataContract[]>addressesTempArray;

            var archivedAddressesTempArray = _.map(jsonData.ArchivedAddresses, item => { return new Dezrez.People.Query.Get.ContactAddressDataContract(item);  });
            this.ArchivedAddresses = <Dezrez.People.Query.Get.ContactAddressDataContract[]>archivedAddressesTempArray;

         }
   }


   export class ContactAddressDataContract extends Dezrez.Location.Query.AddressDataContract {
      Location: Dezrez.Location.Query.LocationDataContract;
      AddressType: Dezrez.System.EnumDataContract;
      ContactOrder: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AddressType = new Dezrez.System.EnumDataContract(jsonData.AddressType);
            this.ContactOrder = jsonData.ContactOrder;
         }
   }


   export class PeopleDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      People: Array<Dezrez.People.Query.Get.PersonDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var peopleTempArray = _.map(jsonData.People, item => { return new Dezrez.People.Query.Get.PersonDataContract(item);  });
            this.People = <Dezrez.People.Query.Get.PersonDataContract[]>peopleTempArray;

         }
   }


   export class CTIContactDataContract extends Dezrez.GlobalSearch.Query.People.GlobalSearchPersonResultDataContract {
      Title: string;
      FirstName: string;
      LastName: string;
      Telephones: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      Emails: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      GroupCount: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      Gender: Dezrez.System.EnumDataContract;
      ContactCardUrl: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ContactCardUrl = jsonData.ContactCardUrl;
         }
   }

}

export module Dezrez.People.Query.LettingRoles {

   export class PersonLettingRoleDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      GroupId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      PropertyId: number;
      RoleStatus: Dezrez.System.EnumDataContract;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      TermType: Dezrez.System.EnumDataContract;
      ServiceLevelType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.GroupId = jsonData.GroupId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.PropertyId = jsonData.PropertyId;
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.TermType = new Dezrez.System.EnumDataContract(jsonData.TermType);
            this.ServiceLevelType = new Dezrez.System.EnumDataContract(jsonData.ServiceLevelType);
         }
   }

}

export module Dezrez.Role.Query.Documents {

   export class RoleOrderedDocumentDataContract extends Dezrez.Media.DocumentDataContract {
      Url: string;
      RequiresAuthentication: boolean;
      ExpiryDate: DateHelper;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
         }
   }

}

export module Dezrez.Role.Query.Get {

   export class RoleDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
         }
   }

}

export module Dezrez.Role.Query.Get.Marketing {

   export class PriceDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PriceValue: number;
      CurrencyCode: string;
      PriceText: string;
      PriceType: Dezrez.System.EnumDataContract;
      PriceQualifierType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PriceValue = jsonData.PriceValue;
            this.CurrencyCode = jsonData.CurrencyCode;
            this.PriceText = jsonData.PriceText;
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.PriceQualifierType = new Dezrez.System.EnumDataContract(jsonData.PriceQualifierType);
         }
   }


   export class PropertyMarketingRoleDataContract extends Dezrez.Role.Query.Get.RoleDataContract {
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      GroupId: number;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      PropertyId: number;
      AgencyType: Dezrez.System.EnumDataContract;
      AgencyPeriod: Dezrez.System.EnumDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Fees: Array<Dezrez.Agency.Query.Fees.AgencyFeeDataContract>;
      OwningTeam: Dezrez.Role.Query.Get.Marketing.OwningTeamDataContract;
      Branch: Dezrez.Branch.Query.Get.BranchReferenceDataContract;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GroupId = jsonData.GroupId;
            this.DefaultPicture = new Dezrez.Media.DocumentDataContract(jsonData.DefaultPicture);
            this.PropertyId = jsonData.PropertyId;
            this.AgencyType = new Dezrez.System.EnumDataContract(jsonData.AgencyType);
            this.AgencyPeriod = new Dezrez.System.EnumDataContract(jsonData.AgencyPeriod);
            var flagsTempArray = _.map(jsonData.Flags, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Flags = <Dezrez.System.EnumDataContract[]>flagsTempArray;

            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            var feesTempArray = _.map(jsonData.Fees, item => { return new Dezrez.Agency.Query.Fees.AgencyFeeDataContract(item);  });
            this.Fees = <Dezrez.Agency.Query.Fees.AgencyFeeDataContract[]>feesTempArray;

            this.OwningTeam = new Dezrez.Role.Query.Get.Marketing.OwningTeamDataContract(jsonData.OwningTeam);
            this.Branch = new Dezrez.Branch.Query.Get.BranchReferenceDataContract(jsonData.Branch);
            this.ValidEpcInPlace = jsonData.ValidEpcInPlace;
            this.ProofOfIdReceived = jsonData.ProofOfIdReceived;
            this.ProofOfOwnershipReceived = jsonData.ProofOfOwnershipReceived;
         }
   }


   export class PropertyLettingRoleDataContract extends Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
      GroupId: number;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      PropertyId: number;
      AgencyType: Dezrez.System.EnumDataContract;
      AgencyPeriod: Dezrez.System.EnumDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Fees: Array<Dezrez.Agency.Query.Fees.AgencyFeeDataContract>;
      OwningTeam: Dezrez.Role.Query.Get.Marketing.OwningTeamDataContract;
      Branch: Dezrez.Branch.Query.Get.BranchReferenceDataContract;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      Deposit: Dezrez.Role.Query.Get.Marketing.DepositDataContract;
      Term: Dezrez.System.EnumDataContract;
      ServiceLevel: Dezrez.System.EnumDataContract;
      AvailableDate: DateHelper;
      TenantRoleId: number;
      LandlordInfo: Array<Dezrez.Role.Query.Get.Group.LandlordInfoDataContract>;
      Utilities: Array<Dezrez.Role.Query.Get.Marketing.UtilityDataContract>;
      OfferAcceptedPriceDataContract: Dezrez.Role.Query.Get.Marketing.OfferAcceptedPriceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Deposit = new Dezrez.Role.Query.Get.Marketing.DepositDataContract(jsonData.Deposit);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.ServiceLevel = new Dezrez.System.EnumDataContract(jsonData.ServiceLevel);
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
            this.TenantRoleId = jsonData.TenantRoleId;
            var landlordInfoTempArray = _.map(jsonData.LandlordInfo, item => { return new Dezrez.Role.Query.Get.Group.LandlordInfoDataContract(item);  });
            this.LandlordInfo = <Dezrez.Role.Query.Get.Group.LandlordInfoDataContract[]>landlordInfoTempArray;

            var utilitiesTempArray = _.map(jsonData.Utilities, item => { return new Dezrez.Role.Query.Get.Marketing.UtilityDataContract(item);  });
            this.Utilities = <Dezrez.Role.Query.Get.Marketing.UtilityDataContract[]>utilitiesTempArray;

            this.OfferAcceptedPriceDataContract = new Dezrez.Role.Query.Get.Marketing.OfferAcceptedPriceDataContract(jsonData.OfferAcceptedPriceDataContract);
         }
   }


   export class PropertySalesRoleDataContract extends Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
      GroupId: number;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      PropertyId: number;
      AgencyType: Dezrez.System.EnumDataContract;
      AgencyPeriod: Dezrez.System.EnumDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Fees: Array<Dezrez.Agency.Query.Fees.AgencyFeeDataContract>;
      OwningTeam: Dezrez.Role.Query.Get.Marketing.OwningTeamDataContract;
      Branch: Dezrez.Branch.Query.Get.BranchReferenceDataContract;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      PurchasingRoleId: number;
      ExchangedPriceDataContract: Dezrez.Role.Query.Get.Marketing.ExchangedPriceDataContract;
      OfferAcceptedPriceDataContract: Dezrez.Role.Query.Get.Marketing.OfferAcceptedPriceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PurchasingRoleId = jsonData.PurchasingRoleId;
            this.ExchangedPriceDataContract = new Dezrez.Role.Query.Get.Marketing.ExchangedPriceDataContract(jsonData.ExchangedPriceDataContract);
            this.OfferAcceptedPriceDataContract = new Dezrez.Role.Query.Get.Marketing.OfferAcceptedPriceDataContract(jsonData.OfferAcceptedPriceDataContract);
         }
   }


   export class OwningTeamDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
         }
   }


   export class ExchangedPriceDataContract {
      PriceValue: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PriceValue = jsonData.PriceValue;
         }
   }


   export class PropertyAuctionRoleDataContract extends Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
      GroupId: number;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      PropertyId: number;
      AgencyType: Dezrez.System.EnumDataContract;
      AgencyPeriod: Dezrez.System.EnumDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Fees: Array<Dezrez.Agency.Query.Fees.AgencyFeeDataContract>;
      OwningTeam: Dezrez.Role.Query.Get.Marketing.OwningTeamDataContract;
      Branch: Dezrez.Branch.Query.Get.BranchReferenceDataContract;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      RequestedLotNumber: number;
      Reserve: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      AuctionRoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.RequestedLotNumber = jsonData.RequestedLotNumber;
            this.Reserve = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Reserve);
            this.AuctionRoleType = new Dezrez.System.EnumDataContract(jsonData.AuctionRoleType);
         }
   }


   export class ExtendedPriceDataContract extends Dezrez.Role.Query.Get.Marketing.PriceDataContract {
      PriceValue: number;
      CurrencyCode: string;
      PriceText: string;
      PriceType: Dezrez.System.EnumDataContract;
      PriceQualifierType: Dezrez.System.EnumDataContract;
      CalculatedPrices: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CalculatedPrices = jsonData.CalculatedPrices;
         }
   }


   export class DepositDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PriceValue: number;
      CurrencyCode: string;
      Scheme: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PriceValue = jsonData.PriceValue;
            this.CurrencyCode = jsonData.CurrencyCode;
            this.Scheme = new Dezrez.System.EnumDataContract(jsonData.Scheme);
         }
   }


   export class OfferAcceptedPriceDataContract {
      PriceValue: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PriceValue = jsonData.PriceValue;
         }
   }


   export class UtilityDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      UtilityType: Dezrez.System.EnumDataContract;
      Supplier: Dezrez.Group.Query.Get.PeopleGroupDataContract;
      MeterReading: string;
      ReadingDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.UtilityType = new Dezrez.System.EnumDataContract(jsonData.UtilityType);
            this.Supplier = new Dezrez.Group.Query.Get.PeopleGroupDataContract(jsonData.Supplier);
            this.MeterReading = jsonData.MeterReading;
            this.ReadingDate = new DateHelper(jsonData.ReadingDate, null, true);
         }
   }

}

export module Dezrez.Role.Query.Vendors {

   export class RoleVendorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      TeamAccessType: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      GroupBackgroundImageUrl: string;
      Notes: string;
      Members: Array<Dezrez.Group.Query.Get.GroupMemberDataContract>;
      OwningTeamId: number;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.GroupBackgroundImageUrl = jsonData.GroupBackgroundImageUrl;
            this.Notes = jsonData.Notes;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Query.Get.GroupMemberDataContract(item);  });
            this.Members = <Dezrez.Group.Query.Get.GroupMemberDataContract[]>membersTempArray;

            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
         }
   }

}

export module Dezrez.Role.Query.Suggest {

   export class PropertyRoleSuggestDataContract {
      IsOnMarket: boolean;
      PageNumber: number;
      PageSize: number;
      Query: string;
      RoleType: string;
      SuggestType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.IsOnMarket = jsonData.IsOnMarket;
            this.PageNumber = jsonData.PageNumber;
            this.PageSize = jsonData.PageSize;
            this.Query = jsonData.Query;
            this.RoleType = jsonData.RoleType;
            this.SuggestType = jsonData.SuggestType;
         }
   }


   export class PropertyRoleSuggestResultDataContract {
      PropertyId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      PropertyRole: Dezrez.Role.Query.Get.RoleDataContract;
      Owner: Dezrez.Property.Query.Owners.PropertyOwnerDataContract;
      Prices: Array<Dezrez.Role.Query.Get.Marketing.PriceDataContract>;
      SummaryText: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyId = jsonData.PropertyId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.DefaultPicture = new Dezrez.Media.DocumentDataContract(jsonData.DefaultPicture);
            this.PropertyRole = new Dezrez.Role.Query.Get.RoleDataContract(jsonData.PropertyRole);
            this.Owner = new Dezrez.Property.Query.Owners.PropertyOwnerDataContract(jsonData.Owner);
            var pricesTempArray = _.map(jsonData.Prices, item => { return new Dezrez.Role.Query.Get.Marketing.PriceDataContract(item);  });
            this.Prices = <Dezrez.Role.Query.Get.Marketing.PriceDataContract[]>pricesTempArray;

            this.SummaryText = jsonData.SummaryText;
         }
   }

}

export module Dezrez.Events.Task.Query {

   export class TelephoneCallMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
         }
   }


   export class TaskDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class TelephoneCallDataContract extends Dezrez.Events.Task.Query.TaskDataContract {
      TelephoneCallType: Dezrez.System.EnumDataContract;
      Members: Array<Dezrez.Events.Task.Query.TelephoneCallMemberDataContract>;
      Number: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TelephoneCallType = new Dezrez.System.EnumDataContract(jsonData.TelephoneCallType);
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Events.Task.Query.TelephoneCallMemberDataContract(item);  });
            this.Members = <Dezrez.Events.Task.Query.TelephoneCallMemberDataContract[]>membersTempArray;

            this.Number = jsonData.Number;
         }
   }


   export class WriteupDataContract extends Dezrez.Events.Task.Query.TaskDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class BoardRequestDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      BoardStatus: Dezrez.System.EnumDataContract;
      BoardSlip: Dezrez.System.EnumDataContract;
      BoardEventStatus: Dezrez.System.EnumDataContract;
      Group: Dezrez.Group.Query.Get.GroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.BoardStatus = new Dezrez.System.EnumDataContract(jsonData.BoardStatus);
            this.BoardSlip = new Dezrez.System.EnumDataContract(jsonData.BoardSlip);
            this.BoardEventStatus = new Dezrez.System.EnumDataContract(jsonData.BoardEventStatus);
            this.Group = new Dezrez.Group.Query.Get.GroupDataContract(jsonData.Group);
         }
   }

}

export module Dezrez.Custom.Query.Get {

   export class CustomFieldDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Type: Dezrez.System.EnumDataContract;
      ControlType: Dezrez.System.EnumDataContract;
      Name: string;
      Validator: string;
      Order: number;
      Options: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.ControlType = new Dezrez.System.EnumDataContract(jsonData.ControlType);
            this.Name = jsonData.Name;
            this.Validator = jsonData.Validator;
            this.Order = jsonData.Order;
            this.Options = (<string[]>jsonData.Options);
         }
   }


   export class CustomFieldGroupDataContract {
      Name: string;
      Fields: Array<Dezrez.Custom.Query.Get.CustomFieldDataContract>;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            var fieldsTempArray = _.map(jsonData.Fields, item => { return new Dezrez.Custom.Query.Get.CustomFieldDataContract(item);  });
            this.Fields = <Dezrez.Custom.Query.Get.CustomFieldDataContract[]>fieldsTempArray;

            this.Order = jsonData.Order;
         }
   }

}

export module Dezrez.Custom.Command.SaveCustomField {

   export class SaveCustomFieldValueCommandSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      CustomFieldId: number;
      Value: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.CustomFieldId = jsonData.CustomFieldId;
            this.Value = jsonData.Value;
         }
   }


   export class CustomFieldGroupWithValuesDataContract {
      Name: string;
      Values: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldValueDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            var valuesTempArray = _.map(jsonData.Values, item => { return new Dezrez.Custom.Command.SaveCustomField.CustomFieldValueDataContract(item);  });
            this.Values = <Dezrez.Custom.Command.SaveCustomField.CustomFieldValueDataContract[]>valuesTempArray;

         }
   }


   export class CustomFieldValueDataContract {
      Type: Dezrez.System.EnumDataContract;
      Name: string;
      Value: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }

}

export module Dezrez.Events.ScheduledEvents.Command {

   export class RecurringScheduleDataContract {
      Frequency: Enums.Frequency;
      StartDate: DateHelper;
      NumberOfOccurrences: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Frequency = <Enums.Frequency>(jsonData.Frequency);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.NumberOfOccurrences = jsonData.NumberOfOccurrences;
         }
   }


   export class DailyRecurringScheduleDataContract extends Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract {
      Frequency: Enums.Frequency;
      StartDate: DateHelper;
      NumberOfOccurrences: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class MailMergeScheduledCommandDataContract {
      Name: string;
      Description: string;
      IncludeOfferAccepted: boolean;
      MatchLimit: number;
      Grades: Array<Dezrez.System.EnumDataContract>;
      IncludePriceChange: boolean;
      ExcludeAlreadySent: boolean;
      ExcludeAlreadySentInLastDays: number;
      Sales: boolean;
      Lettings: boolean;
      StartDate: DateHelper;
      DailySchedule: Dezrez.Events.ScheduledEvents.Command.DailyRecurringScheduleDataContract;
      WeeklySchedule: Dezrez.Events.ScheduledEvents.Command.WeeklyRecurringScheduleDataContract;
      MonthlySchedule: Dezrez.Events.ScheduledEvents.Command.MonthlyRecurringScheduleDataContract;
      QuarterlySchedule: Dezrez.Events.ScheduledEvents.Command.QuarterlyRecurringScheduleDataContract;
      YearlySchedule: Dezrez.Events.ScheduledEvents.Command.YearlyRecurringScheduleDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.IncludeOfferAccepted = jsonData.IncludeOfferAccepted;
            this.MatchLimit = jsonData.MatchLimit;
            var gradesTempArray = _.map(jsonData.Grades, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Grades = <Dezrez.System.EnumDataContract[]>gradesTempArray;

            this.IncludePriceChange = jsonData.IncludePriceChange;
            this.ExcludeAlreadySent = jsonData.ExcludeAlreadySent;
            this.ExcludeAlreadySentInLastDays = jsonData.ExcludeAlreadySentInLastDays;
            this.Sales = jsonData.Sales;
            this.Lettings = jsonData.Lettings;
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.DailySchedule = new Dezrez.Events.ScheduledEvents.Command.DailyRecurringScheduleDataContract(jsonData.DailySchedule);
            this.WeeklySchedule = new Dezrez.Events.ScheduledEvents.Command.WeeklyRecurringScheduleDataContract(jsonData.WeeklySchedule);
            this.MonthlySchedule = new Dezrez.Events.ScheduledEvents.Command.MonthlyRecurringScheduleDataContract(jsonData.MonthlySchedule);
            this.QuarterlySchedule = new Dezrez.Events.ScheduledEvents.Command.QuarterlyRecurringScheduleDataContract(jsonData.QuarterlySchedule);
            this.YearlySchedule = new Dezrez.Events.ScheduledEvents.Command.YearlyRecurringScheduleDataContract(jsonData.YearlySchedule);
         }
   }


   export class MonthlyRecurringScheduleDataContract extends Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract {
      Frequency: Enums.Frequency;
      StartDate: DateHelper;
      NumberOfOccurrences: number;
      MonthlyIntervals: Array<Enums.MonthlyInterval>;
      Days: Array<Enums.DayOfWeek>;
      DayOfMonth: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MonthlyIntervals = jsonData.MonthlyIntervals;
            this.Days = jsonData.Days;
            this.DayOfMonth = jsonData.DayOfMonth;
         }
   }


   export class QuarterlyRecurringScheduleDataContract extends Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract {
      Frequency: Enums.Frequency;
      StartDate: DateHelper;
      NumberOfOccurrences: number;
      Quarters: Array<Enums.Quarter>;
      QuarterlyIntervals: Array<Enums.QuarterlyInterval>;
      MonthlyIntervals: Array<Enums.MonthlyInterval>;
      Days: Array<Enums.DayOfWeek>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Quarters = jsonData.Quarters;
            this.QuarterlyIntervals = jsonData.QuarterlyIntervals;
            this.MonthlyIntervals = jsonData.MonthlyIntervals;
            this.Days = jsonData.Days;
         }
   }


   export class WeeklyRecurringScheduleDataContract extends Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract {
      Frequency: Enums.Frequency;
      StartDate: DateHelper;
      NumberOfOccurrences: number;
      Days: Array<Enums.DayOfWeek>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Days = jsonData.Days;
         }
   }


   export class YearlyRecurringScheduleDataContract extends Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract {
      Frequency: Enums.Frequency;
      StartDate: DateHelper;
      NumberOfOccurrences: number;
      AnniversaryDay: number;
      AnniversaryMonth: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AnniversaryDay = jsonData.AnniversaryDay;
            this.AnniversaryMonth = jsonData.AnniversaryMonth;
         }
   }

}

export module Dezrez.Events.ScheduledEvents.Query {

   export class MailMergeScheduledEventDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      IncludeOfferAccepted: boolean;
      MatchLimit: number;
      Grades: Array<Dezrez.System.EnumDataContract>;
      IncludePriceChange: boolean;
      ExcludeAlreadySent: boolean;
      ExcludeAlreadySentInLastDays: number;
      StartDate: DateHelper;
      Sales: boolean;
      Lettings: boolean;
      Schedule: Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.IncludeOfferAccepted = jsonData.IncludeOfferAccepted;
            this.MatchLimit = jsonData.MatchLimit;
            var gradesTempArray = _.map(jsonData.Grades, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Grades = <Dezrez.System.EnumDataContract[]>gradesTempArray;

            this.IncludePriceChange = jsonData.IncludePriceChange;
            this.ExcludeAlreadySent = jsonData.ExcludeAlreadySent;
            this.ExcludeAlreadySentInLastDays = jsonData.ExcludeAlreadySentInLastDays;
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.Sales = jsonData.Sales;
            this.Lettings = jsonData.Lettings;
            this.Schedule = new Dezrez.Events.ScheduledEvents.Command.RecurringScheduleDataContract(jsonData.Schedule);
         }
   }

}

export module Dezrez.Scheduling.EventScheduling {

   export class RequestAppointmentQueryDataContract {
      AppointmentType: Dezrez.System.EnumDataContract;
      RoleIds: Array<number>;
      Location: Dezrez.Location.Query.PointDataContract;
      Availability: Array<Dezrez.Scheduling.TimeRangeDataContract>;
      PreferredPersonId: number;
      PreferredTeamGroupId: number;
      OtherRequiredPeople: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.AppointmentType = new Dezrez.System.EnumDataContract(jsonData.AppointmentType);
            this.RoleIds = (<number[]>jsonData.RoleIds);
            this.Location = new Dezrez.Location.Query.PointDataContract(jsonData.Location);
            var availabilityTempArray = _.map(jsonData.Availability, item => { return new Dezrez.Scheduling.TimeRangeDataContract(item);  });
            this.Availability = <Dezrez.Scheduling.TimeRangeDataContract[]>availabilityTempArray;

            this.PreferredPersonId = jsonData.PreferredPersonId;
            this.PreferredTeamGroupId = jsonData.PreferredTeamGroupId;
            this.OtherRequiredPeople = (<number[]>jsonData.OtherRequiredPeople);
         }
   }


   export class RequestAppointmentQueryResponseDataContract {
      Availability: Dezrez.Scheduling.TimeRangeDataContract;
      AutomaticallySelectedPeople: Array<number>;
      RequiredPeople: Array<number>;
      TeamId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Availability = new Dezrez.Scheduling.TimeRangeDataContract(jsonData.Availability);
            this.AutomaticallySelectedPeople = (<number[]>jsonData.AutomaticallySelectedPeople);
            this.RequiredPeople = (<number[]>jsonData.RequiredPeople);
            this.TeamId = jsonData.TeamId;
         }
   }

}

export module Dezrez.Scheduling.FreeBusy {

   export class PeopleFreeBusyQueryDataContract {
      Scope: Dezrez.Scheduling.TimeRangeDataContract;
      PersonIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Scope = new Dezrez.Scheduling.TimeRangeDataContract(jsonData.Scope);
            this.PersonIds = (<number[]>jsonData.PersonIds);
         }
   }


   export class PeopleFreeBusyQueryResponseDataContract {
      PersonId: number;
      BusyTimeRanges: Array<Dezrez.Scheduling.TimeRangeDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PersonId = jsonData.PersonId;
            var busyTimeRangesTempArray = _.map(jsonData.BusyTimeRanges, item => { return new Dezrez.Scheduling.TimeRangeDataContract(item);  });
            this.BusyTimeRanges = <Dezrez.Scheduling.TimeRangeDataContract[]>busyTimeRangesTempArray;

         }
   }

}

export module Dezrez.Scheduling {

   export class TimeRangeDataContract {
      Start: DateHelper;
      End: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Start = new DateHelper(jsonData.Start, null, true);
            this.End = new DateHelper(jsonData.End, null, true);
         }
   }

}

export module Dezrez.Events.Appointments.Query.Viewing {

   export class ViewingFeedbackCommunicationDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var rolesTempArray = _.map(jsonData.Roles, (item: any) => {
               return new Dezrez.Role.Query.Get.RoleDataContract(item);
            });
            this.Roles = <Dezrez.Role.Query.Get.RoleDataContract[]>rolesTempArray;

         }
   }


   export class ViewingFeedbackNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class ViewingFeedbackDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      VendorCommunication: Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackCommunicationDataContract;
      Feedback: string;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      ApplicableToGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.VendorCommunication = new Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackCommunicationDataContract(jsonData.VendorCommunication);
            this.Feedback = jsonData.Feedback;
            var rolesTempArray = _.map(jsonData.Roles, (item: any) => {
               return new Dezrez.Role.Query.Get.RoleDataContract(item);
            });
            this.Roles = <Dezrez.Role.Query.Get.RoleDataContract[]>rolesTempArray;

            this.ApplicableToGroupIds = (<number[]>jsonData.ApplicableToGroupIds);
         }
   }


   export class ViewingDataContract extends Dezrez.Events.Appointments.Query.AppointmentDataContract {
      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Address: Dezrez.Location.Query.AddressDataContract;
      MeetingPlace: Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract;
      AttendingGroups: Array<Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract>;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      MarketingRoleId: number;
      PropertyId: number;
      Feedback: Array<Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var feedbackTempArray = _.map(jsonData.Feedback, item => { return new Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackDataContract(item);  });
            this.Feedback = <Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackDataContract[]>feedbackTempArray;

         }
   }

}

export module Dezrez.Events.Appointments.Query.Valuation {

   export class ValuationFeedbackCommunicationDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class ValuationFeedbackDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      VendorCommunication: Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackCommunicationDataContract;
      Feedback: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.VendorCommunication = new Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackCommunicationDataContract(jsonData.VendorCommunication);
            this.Feedback = jsonData.Feedback;
         }
   }


   export class ValuationFeedbackNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }

}

export module Dezrez.Events.Appointments.Query.Viewing.MultiViewing {

   export class MultiViewingDataContract extends Dezrez.Events.Appointments.Query.AppointmentDataContract {
      AllDayEvent: boolean;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Address: Dezrez.Location.Query.AddressDataContract;
      MeetingPlace: Dezrez.Agency.Query.MeetingPlaces.MeetingPlaceDataContract;
      AttendingGroups: Array<Dezrez.Events.Appointments.Query.AppointmentAttendeeCollectionDataContract>;
      SpecialArrangements: Array<Dezrez.SpecialArrangements.Query.SpecialArrangementDataContract>;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      MarketingRoleId: number;
      PropertyId: number;
      TimePerViewing: number;
      PotentialViewings: Array<Dezrez.Events.Appointments.Query.Viewing.MultiViewing.ViewingSlotDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TimePerViewing = jsonData.TimePerViewing;
            var potentialViewingsTempArray = _.map(jsonData.PotentialViewings, item => { return new Dezrez.Events.Appointments.Query.Viewing.MultiViewing.ViewingSlotDataContract(item);  });
            this.PotentialViewings = <Dezrez.Events.Appointments.Query.Viewing.MultiViewing.ViewingSlotDataContract[]>potentialViewingsTempArray;

         }
   }


   export class ViewingSlotDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      StartTime: DateHelper;
      EndTime: DateHelper;
      PropertyMarketingRoleId: number;
      ApprovedByVendor: Dezrez.System.EnumDataContract;
      Address: Dezrez.Location.Query.AddressDataContract;
      VendorAttending: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.StartTime = new DateHelper(jsonData.StartTime, null, true);
            this.EndTime = new DateHelper(jsonData.EndTime, null, true);
            this.PropertyMarketingRoleId = jsonData.PropertyMarketingRoleId;
            this.ApprovedByVendor = new Dezrez.System.EnumDataContract(jsonData.ApprovedByVendor);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.VendorAttending = jsonData.VendorAttending;
         }
   }

}

export module Dezrez.Events.Progression.Command {

   export class RecordOfferCommandDataContract {
      MarketingRoleId: number;
      GroupId: number;
      DateTime: DateHelper;
      NegotiatorIds: Array<number>;
      Value: number;
      Notes: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MarketingRoleId = jsonData.MarketingRoleId;
            this.GroupId = jsonData.GroupId;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.Value = jsonData.Value;
            this.Notes = jsonData.Notes;
         }
   }


   export class WithdrawInstructionDataContract {
      WithdrawnInstructionReasonType: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      RoleId: number;
      Notes: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.WithdrawnInstructionReasonType = new Dezrez.System.EnumDataContract(jsonData.WithdrawnInstructionReasonType);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.RoleId = jsonData.RoleId;
            this.Notes = jsonData.Notes;
         }
   }


   export class WithdrawValuationDataContract {
      WithdrawnValuationReasonType: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      RoleId: number;
      OfferedFee: number;
      InstructedAgent: string;
      WithdrawalContractLengthType: Dezrez.System.EnumDataContract;
      ReminderDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.WithdrawnValuationReasonType = new Dezrez.System.EnumDataContract(jsonData.WithdrawnValuationReasonType);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.RoleId = jsonData.RoleId;
            this.OfferedFee = jsonData.OfferedFee;
            this.InstructedAgent = jsonData.InstructedAgent;
            this.WithdrawalContractLengthType = new Dezrez.System.EnumDataContract(jsonData.WithdrawalContractLengthType);
            this.ReminderDate = new DateHelper(jsonData.ReminderDate, null, true);
         }
   }


   export class InstructToLetCommandDataContract {
      RoleId: number;
      ActualMarketingPrice: number;
      OccupierAllowanceDescription: Dezrez.Descriptions.Command.OccupierAllowanceDescriptionSaveDataContract;
      DepositPriceValue: number;
      DepositScheme: Dezrez.System.EnumDataContract;
      TeamId: number;
      PutOnMarket: boolean;
      TermsReceived: boolean;
      InstructedDateTime: DateHelper;
      NegotiatorIds: Array<number>;
      LeaseType: Dezrez.System.EnumDataContract;
      AvailableDate: DateHelper;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.ActualMarketingPrice = jsonData.ActualMarketingPrice;
            this.OccupierAllowanceDescription = new Dezrez.Descriptions.Command.OccupierAllowanceDescriptionSaveDataContract(jsonData.OccupierAllowanceDescription);
            this.DepositPriceValue = jsonData.DepositPriceValue;
            this.DepositScheme = new Dezrez.System.EnumDataContract(jsonData.DepositScheme);
            this.TeamId = jsonData.TeamId;
            this.PutOnMarket = jsonData.PutOnMarket;
            this.TermsReceived = jsonData.TermsReceived;
            this.InstructedDateTime = new DateHelper(jsonData.InstructedDateTime, null, true);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.LeaseType = new Dezrez.System.EnumDataContract(jsonData.LeaseType);
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
            this.ValidEpcInPlace = jsonData.ValidEpcInPlace;
            this.ProofOfIdReceived = jsonData.ProofOfIdReceived;
            this.ProofOfOwnershipReceived = jsonData.ProofOfOwnershipReceived;
            this.BranchId = jsonData.BranchId;
         }
   }


   export class AddMilestoneNoteCommandDataContract {
      MilestoneId: number;
      DateTime: DateHelper;
      NegotiatorIds: Array<number>;
      Note: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MilestoneId = jsonData.MilestoneId;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.Note = jsonData.Note;
         }
   }


   export class LetCommandDataContract {
      RoleId: number;
      LetDateTime: DateHelper;
      LetEndDateTime: DateHelper;
      TakeOffMarket: boolean;
      Note: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.LetDateTime = new DateHelper(jsonData.LetDateTime, null, true);
            this.LetEndDateTime = new DateHelper(jsonData.LetEndDateTime, null, true);
            this.TakeOffMarket = jsonData.TakeOffMarket;
            this.Note = jsonData.Note;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class RemarketCommandDataContract {
      RoleId: number;
      EndDate: DateHelper;
      AvailableDate: DateHelper;
      PutOnMarket: boolean;
      Note: string;
      NegotiatorIds: Array<number>;
      TeamId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
            this.PutOnMarket = jsonData.PutOnMarket;
            this.Note = jsonData.Note;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.TeamId = jsonData.TeamId;
         }
   }


   export class WithdrawLettingInstructionCommandDataContract extends Dezrez.Events.Progression.Command.WithdrawInstructionDataContract {
      WithdrawnInstructionReasonType: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      RoleId: number;
      Notes: string;
      EndDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
         }
   }


   export class AddGuarantorCommandDataContract {
      Person: Dezrez.Group.Command.AddGroup.AddGroupPersonCommandDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Person = new Dezrez.Group.Command.AddGroup.AddGroupPersonCommandDataContract(jsonData.Person);
         }
   }


   export class ReviseOfferCommandDataContract {
      PurchasingRoleId: number;
      PriceValue: number;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PurchasingRoleId = jsonData.PurchasingRoleId;
            this.PriceValue = jsonData.PriceValue;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class AddProgressionNoteCommandDataContract {
      RoleId: number;
      DateTime: DateHelper;
      NegotiatorIds: Array<number>;
      Title: string;
      Note: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.Title = jsonData.Title;
            this.Note = jsonData.Note;
         }
   }


   export class CompleteCommandDataContract {
      RoleId: number;
      CompletionDateTime: DateHelper;
      TakeOffMarket: boolean;
      Note: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.CompletionDateTime = new DateHelper(jsonData.CompletionDateTime, null, true);
            this.TakeOffMarket = jsonData.TakeOffMarket;
            this.Note = jsonData.Note;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class ExchangeCommandDataContract {
      RoleId: number;
      ExchangedDateTime: DateHelper;
      EstimatedCompletionDateTime: DateHelper;
      TakeOffMarket: boolean;
      Note: string;
      NegotiatorIds: Array<number>;
      FinalAgreedPrice: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.ExchangedDateTime = new DateHelper(jsonData.ExchangedDateTime, null, true);
            this.EstimatedCompletionDateTime = new DateHelper(jsonData.EstimatedCompletionDateTime, null, true);
            this.TakeOffMarket = jsonData.TakeOffMarket;
            this.Note = jsonData.Note;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.FinalAgreedPrice = jsonData.FinalAgreedPrice;
         }
   }


   export class FallenThroughCommandDataContract {
      RoleId: number;
      FallenThroughDateTime: DateHelper;
      PutOnMarket: boolean;
      Reason: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.FallenThroughDateTime = new DateHelper(jsonData.FallenThroughDateTime, null, true);
            this.PutOnMarket = jsonData.PutOnMarket;
            this.Reason = jsonData.Reason;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class InstructToSellCommandDataContract {
      RoleId: number;
      ActualMarketingPrice: number;
      TeamId: number;
      PutOnMarket: boolean;
      InstructedDateTime: DateHelper;
      NegotiatorIds: Array<number>;
      LeaseType: Dezrez.System.EnumDataContract;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.ActualMarketingPrice = jsonData.ActualMarketingPrice;
            this.TeamId = jsonData.TeamId;
            this.PutOnMarket = jsonData.PutOnMarket;
            this.InstructedDateTime = new DateHelper(jsonData.InstructedDateTime, null, true);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.LeaseType = new Dezrez.System.EnumDataContract(jsonData.LeaseType);
            this.ValidEpcInPlace = jsonData.ValidEpcInPlace;
            this.ProofOfIdReceived = jsonData.ProofOfIdReceived;
            this.ProofOfOwnershipReceived = jsonData.ProofOfOwnershipReceived;
            this.BranchId = jsonData.BranchId;
         }
   }


   export class RecordOfferResponseCommandDataContract {
      OfferId: number;
      ResponseType: Dezrez.System.EnumDataContract;
      DateTime: DateHelper;
      OfferNotes: string;
      NegotiatorIds: Array<number>;
      TakeOffMarket: boolean;
      VendorNotified: boolean;
      MarkAsOfferAccepted: boolean;
      ForceNewPurchasingRole: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.OfferId = jsonData.OfferId;
            this.ResponseType = new Dezrez.System.EnumDataContract(jsonData.ResponseType);
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.OfferNotes = jsonData.OfferNotes;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.TakeOffMarket = jsonData.TakeOffMarket;
            this.VendorNotified = jsonData.VendorNotified;
            this.MarkAsOfferAccepted = jsonData.MarkAsOfferAccepted;
            this.ForceNewPurchasingRole = jsonData.ForceNewPurchasingRole;
         }
   }


   export class SetProgressionDateCommandDataContract {
      RoleId: number;
      DateTime: DateHelper;
      NegotiatorIds: Array<number>;
      Note: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RoleId = jsonData.RoleId;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.Note = jsonData.Note;
         }
   }


   export class RecordLettingOfferCommandDataContract extends Dezrez.Events.Progression.Command.RecordOfferCommandDataContract {
      MarketingRoleId: number;
      GroupId: number;
      DateTime: DateHelper;
      NegotiatorIds: Array<number>;
      Value: number;
      Notes: string;
      PreferredMoveInDate: DateHelper;
      PreferredTerm: Dezrez.System.EnumDataContract;
      DepositAmount: number;
      DepositScheme: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PreferredMoveInDate = new DateHelper(jsonData.PreferredMoveInDate, null, true);
            this.PreferredTerm = new Dezrez.System.EnumDataContract(jsonData.PreferredTerm);
            this.DepositAmount = jsonData.DepositAmount;
            this.DepositScheme = new Dezrez.System.EnumDataContract(jsonData.DepositScheme);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
         }
   }

}

export module Dezrez.Events.Progression.Query {

   export class ProgressionNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class ProgressionDataContract extends Dezrez.Events.Query.EventDataContract {
      Team: Dezrez.Events.Query.EventTeamDataContract;
      Notes: Array<Dezrez.Events.Command.EventNoteCommandDataContract>;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class FallenThroughDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      OfferId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OfferId = jsonData.OfferId;
         }
   }


   export class CompletedDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      RoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
         }
   }


   export class ExchangedDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class InstructionToSellDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class PreValuationDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class ValuedDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      UpperValue: number;
      LowerValue: number;
      SuggestedValue: number;
      PriceText: string;
      ValuationType: Dezrez.System.EnumDataContract;
      PriceQualifierType: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      Fees: Array<Dezrez.Agency.Query.Fees.AgencyFeeDataContract>;
      AgencyType: Dezrez.System.EnumDataContract;
      PriceOnApplication: boolean;
      Address: Dezrez.Location.Query.AddressDataContract;
      Term: Dezrez.System.EnumDataContract;
      ServiceLevel: Dezrez.System.EnumDataContract;
      FurnishLevel: Dezrez.System.EnumDataContract;
      AvailableDate: DateHelper;
      ValuationNote: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.UpperValue = jsonData.UpperValue;
            this.LowerValue = jsonData.LowerValue;
            this.SuggestedValue = jsonData.SuggestedValue;
            this.PriceText = jsonData.PriceText;
            this.ValuationType = new Dezrez.System.EnumDataContract(jsonData.ValuationType);
            this.PriceQualifierType = new Dezrez.System.EnumDataContract(jsonData.PriceQualifierType);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            var feesTempArray = _.map(jsonData.Fees, item => { return new Dezrez.Agency.Query.Fees.AgencyFeeDataContract(item);  });
            this.Fees = <Dezrez.Agency.Query.Fees.AgencyFeeDataContract[]>feesTempArray;

            this.AgencyType = new Dezrez.System.EnumDataContract(jsonData.AgencyType);
            this.PriceOnApplication = jsonData.PriceOnApplication;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.ServiceLevel = new Dezrez.System.EnumDataContract(jsonData.ServiceLevel);
            this.FurnishLevel = new Dezrez.System.EnumDataContract(jsonData.FurnishLevel);
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
            this.ValuationNote = jsonData.ValuationNote;
         }
   }


   export class PriceChangeDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      NewPrice: number;
      OldPrice: number;
      NewPriceType: Dezrez.System.EnumDataContract;
      OldPriceType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NewPrice = jsonData.NewPrice;
            this.OldPrice = jsonData.OldPrice;
            this.NewPriceType = new Dezrez.System.EnumDataContract(jsonData.NewPriceType);
            this.OldPriceType = new Dezrez.System.EnumDataContract(jsonData.OldPriceType);
         }
   }


   export class InstructionToLetDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class LetDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class RemarketDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      RoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.RoleId = jsonData.RoleId;
         }
   }

}

export module Dezrez.Events.Progression.Query.Offer {

   export class OfferGroupDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      PrimaryMember: Dezrez.People.Query.Get.PersonDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.PrimaryMember = new Dezrez.People.Query.Get.PersonDataContract(jsonData.PrimaryMember);
         }
   }


   export class OfferPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
         }
   }


   export class OfferCommunicationDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      DateTime: DateHelper;
      EventStatus: Dezrez.System.EnumDataContract;
      Notes: Array<string>;
      Negotiators: Array<Dezrez.Events.Progression.Query.Offer.OfferNegotiatorDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.EventStatus = new Dezrez.System.EnumDataContract(jsonData.EventStatus);
            this.Notes = (<string[]>jsonData.Notes);
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Events.Progression.Query.Offer.OfferNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Events.Progression.Query.Offer.OfferNegotiatorDataContract[]>negotiatorsTempArray;

         }
   }


   export class OfferNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class OfferDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      VendorCommunication: Dezrez.Events.Progression.Query.Offer.OfferCommunicationDataContract;
      Response: Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract;
      Value: number;
      ValidFor: number;
      Property: Dezrez.Events.Progression.Query.Offer.OfferPropertyDataContract;
      ApplicantGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      VendorGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      MarketingRoleId: number;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      RoleType: Dezrez.System.EnumDataContract;
      MarketedPrice: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.VendorCommunication = new Dezrez.Events.Progression.Query.Offer.OfferCommunicationDataContract(jsonData.VendorCommunication);
            this.Response = new Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract(jsonData.Response);
            this.Value = jsonData.Value;
            this.ValidFor = jsonData.ValidFor;
            this.Property = new Dezrez.Events.Progression.Query.Offer.OfferPropertyDataContract(jsonData.Property);
            this.ApplicantGroup = new Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract(jsonData.ApplicantGroup);
            this.VendorGroup = new Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract(jsonData.VendorGroup);
            this.MarketingRoleId = jsonData.MarketingRoleId;
            var rolesTempArray = _.map(jsonData.Roles, (item: any) => {
               return new Dezrez.Role.Query.Get.RoleDataContract(item);
            });
            this.Roles = <Dezrez.Role.Query.Get.RoleDataContract[]>rolesTempArray;

            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.MarketedPrice = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.MarketedPrice);
         }
   }


   export class OfferResponseDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      ResponseType: Dezrez.System.EnumDataContract;
      OfferId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ResponseType = new Dezrez.System.EnumDataContract(jsonData.ResponseType);
            this.OfferId = jsonData.OfferId;
         }
   }


   export class LettingOfferDataContract extends Dezrez.Events.Progression.Query.Offer.OfferDataContract {
      VendorCommunication: Dezrez.Events.Progression.Query.Offer.OfferCommunicationDataContract;
      Response: Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract;
      Value: number;
      ValidFor: number;
      Property: Dezrez.Events.Progression.Query.Offer.OfferPropertyDataContract;
      ApplicantGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      VendorGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      MarketingRoleId: number;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.Roles && this.Roles.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.Roles, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      RoleType: Dezrez.System.EnumDataContract;
      MarketedPrice: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      PreferredMoveInDate: DateHelper;
      PreferredTerm: Dezrez.System.EnumDataContract;
      DepositAmount: number;
      DepositScheme: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PreferredMoveInDate = new DateHelper(jsonData.PreferredMoveInDate, null, true);
            this.PreferredTerm = new Dezrez.System.EnumDataContract(jsonData.PreferredTerm);
            this.DepositAmount = jsonData.DepositAmount;
            this.DepositScheme = new Dezrez.System.EnumDataContract(jsonData.DepositScheme);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
         }
   }

}

export module Dezrez.Finances {

   export class BankAccountDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      AccountHolder: string;
      Name: string;
      AccountNumber: string;
      SortCode: string;
      Holder: Dezrez.People.Query.Get.PersonDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AccountHolder = jsonData.AccountHolder;
            this.Name = jsonData.Name;
            this.AccountNumber = jsonData.AccountNumber;
            this.SortCode = jsonData.SortCode;
            this.Holder = new Dezrez.People.Query.Get.PersonDataContract(jsonData.Holder);
         }
   }


   export class AddPaymentDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      From: Dezrez.Finances.Payments.AddPaymentMemberDataContract;
      To: Dezrez.Finances.Payments.AddPaymentMemberDataContract;
      RoleId: number;
      Amount: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.From = new Dezrez.Finances.Payments.AddPaymentMemberDataContract(jsonData.From);
            this.To = new Dezrez.Finances.Payments.AddPaymentMemberDataContract(jsonData.To);
            this.RoleId = jsonData.RoleId;
            this.Amount = jsonData.Amount;
         }
   }


   export class FinancialAccountDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Holder: Dezrez.People.Query.Get.PersonDataContract;
      HeldWith: Dezrez.Group.Query.Get.GroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Holder = new Dezrez.People.Query.Get.PersonDataContract(jsonData.Holder);
            this.HeldWith = new Dezrez.Group.Query.Get.GroupDataContract(jsonData.HeldWith);
         }
   }


   export class PaymentDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      From: Dezrez.Finances.Payments.PaymentMemberDataContract;
      To: Dezrez.Finances.Payments.PaymentMemberDataContract;
      Amount: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.From = new Dezrez.Finances.Payments.PaymentMemberDataContract(jsonData.From);
            this.To = new Dezrez.Finances.Payments.PaymentMemberDataContract(jsonData.To);
            this.Amount = jsonData.Amount;
         }
   }

}

export module Dezrez.Finances.Payments {

   export class AddPaymentMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PeopleGroupId: number;
      PersonId: number;
      FinancialAccountId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PeopleGroupId = jsonData.PeopleGroupId;
            this.PersonId = jsonData.PersonId;
            this.FinancialAccountId = jsonData.FinancialAccountId;
         }
   }


   export class PaymentMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PeopleGroup: Dezrez.Group.Query.Get.PeopleGroupDataContract;
      Person: Dezrez.People.Query.Get.PersonDataContract;
      FinancialAccount: Dezrez.Finances.FinancialAccountDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PeopleGroup = new Dezrez.Group.Query.Get.PeopleGroupDataContract(jsonData.PeopleGroup);
            this.Person = new Dezrez.People.Query.Get.PersonDataContract(jsonData.Person);
            this.FinancialAccount = new Dezrez.Finances.FinancialAccountDataContract(jsonData.FinancialAccount);
         }
   }

}

export module Dezrez.Identities.Command {

   export class AddIdentityCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FriendlyName: string;
      Issuer: string;
      UniqueIdentifier: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FriendlyName = jsonData.FriendlyName;
            this.Issuer = jsonData.Issuer;
            this.UniqueIdentifier = jsonData.UniqueIdentifier;
         }
   }

}

export module Dezrez.Group.Command.AddSearch {

   export class GroupSaveSearchPropertyTagCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class GroupSearchPlaceDataContract {
      Id: string;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
         }
   }


   export class GroupMustHaveSearchCriteriaDataContract {
      MinimumBedrooms: number;
      MinimumReceptions: number;
      MinimumBathrooms: number;
      PropertyTypes: Array<Dezrez.System.EnumDataContract>;
      PropertyTags: Array<Dezrez.Group.Command.AddSearch.GroupSaveSearchPropertyTagCommandDataContract>;
      Regions: Array<Dezrez.Group.Command.AddSearch.GroupSearchRegionDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MinimumBedrooms = jsonData.MinimumBedrooms;
            this.MinimumReceptions = jsonData.MinimumReceptions;
            this.MinimumBathrooms = jsonData.MinimumBathrooms;
            var propertyTypesTempArray = _.map(jsonData.PropertyTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.PropertyTypes = <Dezrez.System.EnumDataContract[]>propertyTypesTempArray;

            var propertyTagsTempArray = _.map(jsonData.PropertyTags, item => { return new Dezrez.Group.Command.AddSearch.GroupSaveSearchPropertyTagCommandDataContract(item);  });
            this.PropertyTags = <Dezrez.Group.Command.AddSearch.GroupSaveSearchPropertyTagCommandDataContract[]>propertyTagsTempArray;

            var regionsTempArray = _.map(jsonData.Regions, item => { return new Dezrez.Group.Command.AddSearch.GroupSearchRegionDataContract(item);  });
            this.Regions = <Dezrez.Group.Command.AddSearch.GroupSearchRegionDataContract[]>regionsTempArray;

         }
   }


   export class GroupSearchCriteriaDataContract {
      BudgetFrom: number;
      BudgetTo: number;
      BudgetFlexible: boolean;
      MustHave: Dezrez.Group.Command.AddSearch.GroupMustHaveSearchCriteriaDataContract;
      ShouldNotHave: Dezrez.Group.Command.AddSearch.GroupShouldNotHaveSearchCriteriaDataContract;
      MustNotHave: Dezrez.Group.Command.AddSearch.GroupMustNotHaveSearchCriteriaDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.BudgetFrom = jsonData.BudgetFrom;
            this.BudgetTo = jsonData.BudgetTo;
            this.BudgetFlexible = jsonData.BudgetFlexible;
            this.MustHave = new Dezrez.Group.Command.AddSearch.GroupMustHaveSearchCriteriaDataContract(jsonData.MustHave);
            this.ShouldNotHave = new Dezrez.Group.Command.AddSearch.GroupShouldNotHaveSearchCriteriaDataContract(jsonData.ShouldNotHave);
            this.MustNotHave = new Dezrez.Group.Command.AddSearch.GroupMustNotHaveSearchCriteriaDataContract(jsonData.MustNotHave);
         }
   }


   export class GroupShouldNotHaveSearchCriteriaDataContract {
      PropertyTypes: Array<Dezrez.System.EnumDataContract>;
      PropertyTags: Array<Dezrez.Group.Command.AddSearch.GroupSaveSearchPropertyTagCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var propertyTypesTempArray = _.map(jsonData.PropertyTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.PropertyTypes = <Dezrez.System.EnumDataContract[]>propertyTypesTempArray;

            var propertyTagsTempArray = _.map(jsonData.PropertyTags, item => { return new Dezrez.Group.Command.AddSearch.GroupSaveSearchPropertyTagCommandDataContract(item);  });
            this.PropertyTags = <Dezrez.Group.Command.AddSearch.GroupSaveSearchPropertyTagCommandDataContract[]>propertyTagsTempArray;

         }
   }


   export class GroupLettingsSearchCriteriaDataContract extends Dezrez.Group.Command.AddSearch.GroupSearchCriteriaDataContract {
      BudgetFrom: number;
      BudgetTo: number;
      BudgetFlexible: boolean;
      MustHave: Dezrez.Group.Command.AddSearch.GroupMustHaveSearchCriteriaDataContract;
      ShouldNotHave: Dezrez.Group.Command.AddSearch.GroupShouldNotHaveSearchCriteriaDataContract;
      MustNotHave: Dezrez.Group.Command.AddSearch.GroupMustNotHaveSearchCriteriaDataContract;
      TargetMoveIn: DateHelper;
      TermType: Dezrez.System.EnumDataContract;
      Students: boolean;
      IsSmoker: boolean;
      PetOwner: boolean;
      HousingBenefits: boolean;
      FurnishLevelType: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TargetMoveIn = new DateHelper(jsonData.TargetMoveIn, null, true);
            this.TermType = new Dezrez.System.EnumDataContract(jsonData.TermType);
            this.Students = jsonData.Students;
            this.IsSmoker = jsonData.IsSmoker;
            this.PetOwner = jsonData.PetOwner;
            this.HousingBenefits = jsonData.HousingBenefits;
            this.FurnishLevelType = new Dezrez.System.EnumDataContract(jsonData.FurnishLevelType);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
         }
   }


   export class GroupMustNotHaveSearchCriteriaDataContract {
      Regions: Array<Dezrez.Group.Command.AddSearch.GroupSearchRegionDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var regionsTempArray = _.map(jsonData.Regions, item => { return new Dezrez.Group.Command.AddSearch.GroupSearchRegionDataContract(item);  });
            this.Regions = <Dezrez.Group.Command.AddSearch.GroupSearchRegionDataContract[]>regionsTempArray;

         }
   }


   export class GroupSearchRegionDataContract {
      Id: number;
      Name: string;
      Type: string;
      Source: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.Type = jsonData.Type;
            this.Source = jsonData.Source;
         }
   }


   export class SaveGroupLettingsSearchingRoleDataContract {
      Id: number;
      OwningTeamId: number;
      BranchId: number;
      Description: string;
      Criteria: Dezrez.Group.Command.AddSearch.GroupLettingsSearchCriteriaDataContract;
      InActive: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Description = jsonData.Description;
            this.Criteria = new Dezrez.Group.Command.AddSearch.GroupLettingsSearchCriteriaDataContract(jsonData.Criteria);
            this.InActive = jsonData.InActive;
         }
   }


   export class SaveGroupSalesSearchingRoleDataContract {
      Id: number;
      OwningTeamId: number;
      BranchId: number;
      Description: string;
      Criteria: Dezrez.Group.Command.AddSearch.GroupSearchCriteriaDataContract;
      Grade: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      FinancialStatus: Dezrez.System.EnumDataContract;
      InActive: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Description = jsonData.Description;
            this.Criteria = new Dezrez.Group.Command.AddSearch.GroupSearchCriteriaDataContract(jsonData.Criteria);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.FinancialStatus = new Dezrez.System.EnumDataContract(jsonData.FinancialStatus);
            this.InActive = jsonData.InActive;
         }
   }

}

export module Dezrez.Group.Command.UpdatePrimaryGroupMember {

   export class UpdatePrimaryGroupMemberCommandDataContract {
      GroupId: number;
      PrimaryGroupMemberId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.PrimaryGroupMemberId = jsonData.PrimaryGroupMemberId;
         }
   }

}

export module Dezrez.Group.Command.SetBranch {

   export class SetGroupBranchCommandDataContract {
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.BranchId = jsonData.BranchId;
         }
   }

}

export module Dezrez.Group.Command.SetStatus {

   export class GroupUnDeleteCommandDataContract {
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }


   export class SetGroupMemberStatusCommandDataContract {
      Id: number;
      Reason: Dezrez.System.EnumDataContract;
      Note: string;
      InActive: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Reason = new Dezrez.System.EnumDataContract(jsonData.Reason);
            this.Note = jsonData.Note;
            this.InActive = jsonData.InActive;
         }
   }

}

export module Dezrez.Group.Command.SetSearchTeam {

   export class SetGroupSearchTeamCommandDataContract {
      TeamGroupId: number;
      GroupSearhcingRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TeamGroupId = jsonData.TeamGroupId;
            this.GroupSearhcingRoleId = jsonData.GroupSearhcingRoleId;
         }
   }

}

export module Dezrez.Group.Command.SetOwningTeam {

   export class SetGroupTeamCommandDataContract {
      TeamGroupId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TeamGroupId = jsonData.TeamGroupId;
         }
   }

}

export module Dezrez.Group.Command.SendTweet {

   export class SendGroupTweetDataContract {
      GroupId: number;
      NegotiatorId: number;
      ContactItemIds: Array<number>;
      Message: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.ContactItemIds = (<number[]>jsonData.ContactItemIds);
            this.Message = jsonData.Message;
            this.PreferredProviderId = jsonData.PreferredProviderId;
            this.BrandId = jsonData.BrandId;
            this.FranchiseId = jsonData.FranchiseId;
         }
   }

}

export module Dezrez.Group.Command.SetGroupMembersOrder {

   export class GroupMemberOrderDataContract {
      GroupMemberId: number;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupMemberId = jsonData.GroupMemberId;
            this.Order = jsonData.Order;
         }
   }


   export class SetGroupMembersOrderCommandDataContract {
      GroupId: number;
      Members: Array<Dezrez.Group.Command.SetGroupMembersOrder.GroupMemberOrderDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Command.SetGroupMembersOrder.GroupMemberOrderDataContract(item);  });
            this.Members = <Dezrez.Group.Command.SetGroupMembersOrder.GroupMemberOrderDataContract[]>membersTempArray;

         }
   }

}

export module Dezrez.Group.Command.AddTeam {

   export class AddTeamCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Responsibilities: Array<Dezrez.System.EnumDataContract>;
      TeamLeaderIds: Array<number>;
      TeamMemberIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            var responsibilitiesTempArray = _.map(jsonData.Responsibilities, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Responsibilities = <Dezrez.System.EnumDataContract[]>responsibilitiesTempArray;

            this.TeamLeaderIds = (<number[]>jsonData.TeamLeaderIds);
            this.TeamMemberIds = (<number[]>jsonData.TeamMemberIds);
         }
   }

}

export module Dezrez.Group.Command.SetFlag {

   export class SetFlagDataContract {
      InterestFlag: Dezrez.System.EnumDataContract;
      Enabled: boolean;
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.InterestFlag = new Dezrez.System.EnumDataContract(jsonData.InterestFlag);
            this.Enabled = jsonData.Enabled;
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }

}

export module Dezrez.Group.Query.Get {

   export class GroupMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Person: Dezrez.Group.Query.Get.GroupMemberPersonDataContract;
      RelationshipType: Dezrez.System.EnumDataContract;
      SystemStatus: Dezrez.System.EnumDataContract;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Person = new Dezrez.Group.Query.Get.GroupMemberPersonDataContract(jsonData.Person);
            this.RelationshipType = new Dezrez.System.EnumDataContract(jsonData.RelationshipType);
            this.SystemStatus = new Dezrez.System.EnumDataContract(jsonData.SystemStatus);
            this.Order = jsonData.Order;
         }
   }


   export class GroupMemberPersonDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      Addresses: Array<Dezrez.Location.Query.AddressDataContract>;

      public contact: Dezrez.People.Query.Get.ContactAddressDataContract;
      get ContactData(): Dezrez.People.Query.Get.ContactAddressDataContract {
         if (this.Addresses && this.Addresses.length) {
            return (this.contact || (this.contact = this.getType<Dezrez.People.Query.Get.ContactAddressDataContract>(this.Addresses, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Contact";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      ContactItems: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            var addressesTempArray = _.map(jsonData.Addresses, (item: any) => {
               return new Dezrez.Location.Query.AddressDataContract(item);
            });
            this.Addresses = <Dezrez.Location.Query.AddressDataContract[]>addressesTempArray;

            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.ContactItems = <Dezrez.People.Query.Get.ContactItemDataContract[]>contactItemsTempArray;

         }
   }


   export class GroupDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      SystemStatus: Dezrez.System.EnumDataContract;
      GroupBackgroundImageUrl: string;
      Notes: string;
      Members: Array<Dezrez.Group.Query.Get.GroupMemberDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.SystemStatus = new Dezrez.System.EnumDataContract(jsonData.SystemStatus);
            this.GroupBackgroundImageUrl = jsonData.GroupBackgroundImageUrl;
            this.Notes = jsonData.Notes;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Query.Get.GroupMemberDataContract(item);  });
            this.Members = <Dezrez.Group.Query.Get.GroupMemberDataContract[]>membersTempArray;

         }
   }


   export class PeopleGroupDataContract extends Dezrez.Group.Query.Get.GroupDataContract {
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      SystemStatus: Dezrez.System.EnumDataContract;
      GroupBackgroundImageUrl: string;
      Notes: string;
      Members: Array<Dezrez.Group.Query.Get.GroupMemberDataContract>;
      BranchId: number;
      OwningTeamId: number;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;
      Address: Dezrez.Location.Query.AddressDataContract;
      RoleCount: number;
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      TeamAccessType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.BranchId = jsonData.BranchId;
            this.OwningTeamId = jsonData.OwningTeamId;
            var rolesTempArray = _.map(jsonData.Roles, (item: any) => {
               return new Dezrez.Role.Query.Get.RoleDataContract(item);
            });
            this.Roles = <Dezrez.Role.Query.Get.RoleDataContract[]>rolesTempArray;

            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.RoleCount = jsonData.RoleCount;
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            this.TeamAccessType = jsonData.TeamAccessType;
         }
   }


   export class HeatMapDataContract {
      Latitude: number;
      Longitude: number;
      Weight: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.Weight = jsonData.Weight;
         }
   }

}

export module Dezrez.Group.Query.OffersMadeReceived {

   export class GroupOfferCommunicationDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      DateTime: DateHelper;
      EventStatus: Dezrez.System.EnumDataContract;
      Notes: string;
      Negotiators: Array<Dezrez.Group.Query.OffersMadeReceived.GroupOfferNegotiatorDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.EventStatus = new Dezrez.System.EnumDataContract(jsonData.EventStatus);
            this.Notes = jsonData.Notes;
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Group.Query.OffersMadeReceived.GroupOfferNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Group.Query.OffersMadeReceived.GroupOfferNegotiatorDataContract[]>negotiatorsTempArray;

         }
   }


   export class GroupOfferGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
         }
   }


   export class GroupOfferNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class GroupOfferPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
         }
   }


   export class GroupOfferDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      VendorCommunication: Dezrez.Events.Progression.Query.Offer.OfferCommunicationDataContract;
      Response: Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract;
      Value: number;
      ValidFor: number;
      Property: Dezrez.Events.Progression.Query.Offer.OfferPropertyDataContract;
      ApplicantGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      VendorGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      MarketingRoleId: number;
      RoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.VendorCommunication = new Dezrez.Events.Progression.Query.Offer.OfferCommunicationDataContract(jsonData.VendorCommunication);
            this.Response = new Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract(jsonData.Response);
            this.Value = jsonData.Value;
            this.ValidFor = jsonData.ValidFor;
            this.Property = new Dezrez.Events.Progression.Query.Offer.OfferPropertyDataContract(jsonData.Property);
            this.ApplicantGroup = new Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract(jsonData.ApplicantGroup);
            this.VendorGroup = new Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract(jsonData.VendorGroup);
            this.MarketingRoleId = jsonData.MarketingRoleId;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
         }
   }


   export class GroupOfferResponseDataContract extends Dezrez.Events.Progression.Query.ProgressionDataContract {
      ResponseType: Dezrez.System.EnumDataContract;
      OfferId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ResponseType = new Dezrez.System.EnumDataContract(jsonData.ResponseType);
            this.OfferId = jsonData.OfferId;
         }
   }


   export class GroupLettingOfferDataContract extends Dezrez.Group.Query.OffersMadeReceived.GroupOfferDataContract {
      VendorCommunication: Dezrez.Events.Progression.Query.Offer.OfferCommunicationDataContract;
      Response: Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract;
      Value: number;
      ValidFor: number;
      Property: Dezrez.Events.Progression.Query.Offer.OfferPropertyDataContract;
      ApplicantGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      VendorGroup: Dezrez.Events.Progression.Query.Offer.OfferGroupDataContract;
      MarketingRoleId: number;
      RoleType: Dezrez.System.EnumDataContract;
      PreferredMoveInDate: DateHelper;
      PreferredTerm: Dezrez.System.EnumDataContract;
      DepositAmount: number;
      DepositScheme: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PreferredMoveInDate = new DateHelper(jsonData.PreferredMoveInDate, null, true);
            this.PreferredTerm = new Dezrez.System.EnumDataContract(jsonData.PreferredTerm);
            this.DepositAmount = jsonData.DepositAmount;
            this.DepositScheme = new Dezrez.System.EnumDataContract(jsonData.DepositScheme);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
         }
   }

}

export module Dezrez.Group.Query.PropertyMatches {

   export class GroupPropertyMatchMarketingRoleDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      SummaryTextDescription: string;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      OwningTeam: Dezrez.Group.Query.Get.GroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.DefaultPicture = new Dezrez.Media.DocumentDataContract(jsonData.DefaultPicture);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.SummaryTextDescription = jsonData.SummaryTextDescription;
            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            var flagsTempArray = _.map(jsonData.Flags, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Flags = <Dezrez.System.EnumDataContract[]>flagsTempArray;

            this.OwningTeam = new Dezrez.Group.Query.Get.GroupDataContract(jsonData.OwningTeam);
         }
   }


   export class GroupPropertyMatchPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchAddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchAddressDataContract(jsonData.Address);
         }
   }


   export class GroupPropertyMatchLettingRoleDataContract extends Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchMarketingRoleDataContract {
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      SummaryTextDescription: string;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      OwningTeam: Dezrez.Group.Query.Get.GroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class GroupPropertyMatchAddressDataContract {
      Number: string;
      BuildingName: string;
      OrganizationName: string;
      Street: string;
      Town: string;
      Locality: string;
      County: string;
      Postcode: string;
      LatitudeLongitude: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Number = jsonData.Number;
            this.BuildingName = jsonData.BuildingName;
            this.OrganizationName = jsonData.OrganizationName;
            this.Street = jsonData.Street;
            this.Town = jsonData.Town;
            this.Locality = jsonData.Locality;
            this.County = jsonData.County;
            this.Postcode = jsonData.Postcode;
            this.LatitudeLongitude = jsonData.LatitudeLongitude;
         }
   }


   export class GroupPropertyMatchSalesRoleDataContract extends Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchMarketingRoleDataContract {
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      SummaryTextDescription: string;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      OwningTeam: Dezrez.Group.Query.Get.GroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class GroupPropertyMatchNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class GroupPropertyMatchOwningTeamDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      Members: Array<Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchNegotiatorDataContract>;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchNegotiatorDataContract(item);  });
            this.Members = <Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchNegotiatorDataContract[]>membersTempArray;

            this.BranchId = jsonData.BranchId;
         }
   }


   export class GroupMatchFindQueryDataContract {
      PageSize: number;
      PageNumber: number;
      PropertyRoleIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PageSize = jsonData.PageSize;
            this.PageNumber = jsonData.PageNumber;
            this.PropertyRoleIds = (<number[]>jsonData.PropertyRoleIds);
         }
   }


   export class GroupPropertyMatchCriteriaDataContract {
      MatchType: Dezrez.System.EnumDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MatchType = new Dezrez.System.EnumDataContract(jsonData.MatchType);
            this.Name = jsonData.Name;
         }
   }


   export class GroupPropertyMatchDetailDataContract {
      MatchedCriteria: Array<Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchCriteriaDataContract>;
      UnmatchedCriteria: Array<Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchCriteriaDataContract>;
      MatchedCriteriaCount: number;
      TotalCriteriaCount: number;
      MatchPercentage: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var matchedCriteriaTempArray = _.map(jsonData.MatchedCriteria, item => { return new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchCriteriaDataContract(item);  });
            this.MatchedCriteria = <Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchCriteriaDataContract[]>matchedCriteriaTempArray;

            var unmatchedCriteriaTempArray = _.map(jsonData.UnmatchedCriteria, item => { return new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchCriteriaDataContract(item);  });
            this.UnmatchedCriteria = <Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchCriteriaDataContract[]>unmatchedCriteriaTempArray;

            this.MatchedCriteriaCount = jsonData.MatchedCriteriaCount;
            this.TotalCriteriaCount = jsonData.TotalCriteriaCount;
            this.MatchPercentage = jsonData.MatchPercentage;
         }
   }


   export class GroupPropertyMatchDataContract {
      PrimaryGroupMember: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchPrimaryGroupMemberDataContract;
      Property: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchPropertyDataContract;
      Role: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchMarketingRoleDataContract;
      Details: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchDetailDataContract;
      Negotiators: Array<Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchNegotiatorDataContract>;
      OwningTeam: Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchOwningTeamDataContract;
      Branch: Dezrez.Lists.BranchSummaryDataContract;
      LastMailout: DateHelper;
      LastReduced: DateHelper;
      OfferCount: number;
      ViewingCount: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PrimaryGroupMember = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchPrimaryGroupMemberDataContract(jsonData.PrimaryGroupMember);
            this.Property = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchPropertyDataContract(jsonData.Property);
            this.Role = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchMarketingRoleDataContract(jsonData.Role);
            this.Details = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchDetailDataContract(jsonData.Details);
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchNegotiatorDataContract[]>negotiatorsTempArray;

            this.OwningTeam = new Dezrez.Group.Query.PropertyMatches.GroupPropertyMatchOwningTeamDataContract(jsonData.OwningTeam);
            this.Branch = new Dezrez.Lists.BranchSummaryDataContract(jsonData.Branch);
            this.LastMailout = new DateHelper(jsonData.LastMailout, null, true);
            this.LastReduced = new DateHelper(jsonData.LastReduced, null, true);
            this.OfferCount = jsonData.OfferCount;
            this.ViewingCount = jsonData.ViewingCount;
         }
   }


   export class GroupPropertyMatchPrimaryGroupMemberDataContract {
      Id: number;
      GroupId: number;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      EmailAddress: Dezrez.People.Query.Get.ContactItemDataContract;
      Telephone: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.GroupId = jsonData.GroupId;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.EmailAddress = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.EmailAddress);
            this.Telephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.Telephone);
         }
   }


   export class GroupPropertyMatchFilterDataContract {
      BranchIds: Array<number>;
      NegotiatorId: number;
      ExcludeOfferAccepted: boolean;
      IncludedRoleIds: Array<number>;
      ExcludedRoleIds: Array<number>;
      ExcludeMailoutDays: number;
      OwningTeamId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.BranchIds = (<number[]>jsonData.BranchIds);
            this.NegotiatorId = jsonData.NegotiatorId;
            this.ExcludeOfferAccepted = jsonData.ExcludeOfferAccepted;
            this.IncludedRoleIds = (<number[]>jsonData.IncludedRoleIds);
            this.ExcludedRoleIds = (<number[]>jsonData.ExcludedRoleIds);
            this.ExcludeMailoutDays = jsonData.ExcludeMailoutDays;
            this.OwningTeamId = jsonData.OwningTeamId;
         }
   }

}

export module Dezrez.Group.Query.MostActive {

   export class MostActiveFilterQueryDataContract {
      RangeFrom: DateHelper;
      RangeTo: DateHelper;
      BranchId: number;
      RoleTypes: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RangeFrom = new DateHelper(jsonData.RangeFrom, null, true);
            this.RangeTo = new DateHelper(jsonData.RangeTo, null, true);
            this.BranchId = jsonData.BranchId;
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
         }
   }


   export class MostActivePersonMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
         }
   }


   export class MostActiveGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      Members: Array<Dezrez.Group.Query.MostActive.MostActivePersonMemberDataContract>;
      PrimaryMemberId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      ViewingCount: number;
      OfferCount: number;
      TelephoneCount: number;
      MailoutCount: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Query.MostActive.MostActivePersonMemberDataContract(item);  });
            this.Members = <Dezrez.Group.Query.MostActive.MostActivePersonMemberDataContract[]>membersTempArray;

            this.PrimaryMemberId = jsonData.PrimaryMemberId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.ViewingCount = jsonData.ViewingCount;
            this.OfferCount = jsonData.OfferCount;
            this.TelephoneCount = jsonData.TelephoneCount;
            this.MailoutCount = jsonData.MailoutCount;
         }
   }

}

export module Dezrez.Group.Query.Aggregations {

   export class GroupLocationAggregationDataContract {
      Total: number;
      Aggregations: Array<Dezrez.Aggregations.AggregationLatLonCountDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Total = jsonData.Total;
            var aggregationsTempArray = _.map(jsonData.Aggregations, item => { return new Dezrez.Aggregations.AggregationLatLonCountDataContract(item);  });
            this.Aggregations = <Dezrez.Aggregations.AggregationLatLonCountDataContract[]>aggregationsTempArray;

         }
   }

}

export module Dezrez.Group.Query.SearchingRoles {

   export class GroupSearchingRoleDataContract extends Dezrez.Role.Query.Get.RoleDataContract {
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      Description: string;
      DislikedRoles: Array<number>;
      LikedRoles: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Description = jsonData.Description;
            this.DislikedRoles = (<number[]>jsonData.DislikedRoles);
            this.LikedRoles = (<number[]>jsonData.LikedRoles);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
         }
   }


   export class GroupLettingsSearchingRoleDataContract extends Dezrez.Group.Query.SearchingRoles.GroupSearchingRoleDataContract {
      Description: string;
      DislikedRoles: Array<number>;
      LikedRoles: Array<number>;
      RoleStatus: Dezrez.System.EnumDataContract;
      OwningTeamId: number;
      BranchId: number;
      Criteria: Dezrez.Group.Command.AddSearch.GroupLettingsSearchCriteriaDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Criteria = new Dezrez.Group.Command.AddSearch.GroupLettingsSearchCriteriaDataContract(jsonData.Criteria);
         }
   }


   export class GroupSalesSearchingRoleDataContract extends Dezrez.Group.Query.SearchingRoles.GroupSearchingRoleDataContract {
      Description: string;
      DislikedRoles: Array<number>;
      LikedRoles: Array<number>;
      RoleStatus: Dezrez.System.EnumDataContract;
      OwningTeamId: number;
      BranchId: number;
      Criteria: Dezrez.Group.Command.AddSearch.GroupSearchCriteriaDataContract;
      Grade: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      FinancialStatus: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Criteria = new Dezrez.Group.Command.AddSearch.GroupSearchCriteriaDataContract(jsonData.Criteria);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.FinancialStatus = new Dezrez.System.EnumDataContract(jsonData.FinancialStatus);
         }
   }

}

export module Dezrez.Property.Query.Owners {

   export class PropertyOwnerDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      TeamAccessType: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      GroupBackgroundImageUrl: string;
      Notes: string;
      Members: Array<Dezrez.Group.Query.Get.GroupMemberDataContract>;
      OwningTeamId: number;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.GroupBackgroundImageUrl = jsonData.GroupBackgroundImageUrl;
            this.Notes = jsonData.Notes;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Query.Get.GroupMemberDataContract(item);  });
            this.Members = <Dezrez.Group.Query.Get.GroupMemberDataContract[]>membersTempArray;

            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
         }
   }

}

export module Dezrez.Property.Query.Aggregations {

   export class PropertyLocationAggregationDataContract {
      Total: number;
      Aggregations: Array<Dezrez.Aggregations.AggregationLatLonCountDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Total = jsonData.Total;
            var aggregationsTempArray = _.map(jsonData.Aggregations, item => { return new Dezrez.Aggregations.AggregationLatLonCountDataContract(item);  });
            this.Aggregations = <Dezrez.Aggregations.AggregationLatLonCountDataContract[]>aggregationsTempArray;

         }
   }

}

export module Dezrez.Property.Query.HistoricalPriceData {

   export class HistoricalPriceDataContract {
      TransactionId: any;
      Price: number;
      DateTime: DateHelper;
      Postcode: string;
      Outcode: string;
      Incode: string;
      PropertyType: string;
      StyleType: string;
      LeaseType: string;
      NumberParsed: number;
      NumberSuffix: string;
      Number: string;
      BuildingName: string;
      Latitude: number;
      Longitude: number;
      LatitudeLongitude: string;
      AddressId: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TransactionId = jsonData.TransactionId;
            this.Price = jsonData.Price;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.Postcode = jsonData.Postcode;
            this.Outcode = jsonData.Outcode;
            this.Incode = jsonData.Incode;
            this.PropertyType = jsonData.PropertyType;
            this.StyleType = jsonData.StyleType;
            this.LeaseType = jsonData.LeaseType;
            this.NumberParsed = jsonData.NumberParsed;
            this.NumberSuffix = jsonData.NumberSuffix;
            this.Number = jsonData.Number;
            this.BuildingName = jsonData.BuildingName;
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.LatitudeLongitude = jsonData.LatitudeLongitude;
            this.AddressId = jsonData.AddressId;
         }
   }

}

export module Dezrez.Group.Command.AddGroup {

   export class AddGroupMemberCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Person: Dezrez.Group.Command.AddGroup.AddGroupPersonCommandDataContract;
      RelationshipType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Person = new Dezrez.Group.Command.AddGroup.AddGroupPersonCommandDataContract(jsonData.Person);
            this.RelationshipType = new Dezrez.System.EnumDataContract(jsonData.RelationshipType);
         }
   }


   export class AddGroupCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      Members: Array<Dezrez.Group.Command.AddGroup.AddGroupMemberCommandDataContract>;
      GroupType: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      ExternalProviderTypes: Array<Dezrez.System.EnumDataContract>;
      VATNumber: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Group.Command.AddGroup.AddGroupMemberCommandDataContract(item);  });
            this.Members = <Dezrez.Group.Command.AddGroup.AddGroupMemberCommandDataContract[]>membersTempArray;

            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            var externalProviderTypesTempArray = _.map(jsonData.ExternalProviderTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.ExternalProviderTypes = <Dezrez.System.EnumDataContract[]>externalProviderTypesTempArray;

            this.VATNumber = jsonData.VATNumber;
         }
   }


   export class AddGroupPersonCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PersonId: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Addresses: Array<Dezrez.Location.Command.ContactAddressSaveCommandDataContract>;
      ContactItems: Array<Dezrez.People.Command.AddContactItem.ContactItemSaveCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PersonId = jsonData.PersonId;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            var addressesTempArray = _.map(jsonData.Addresses, item => { return new Dezrez.Location.Command.ContactAddressSaveCommandDataContract(item);  });
            this.Addresses = <Dezrez.Location.Command.ContactAddressSaveCommandDataContract[]>addressesTempArray;

            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Command.AddContactItem.ContactItemSaveCommandDataContract(item);  });
            this.ContactItems = <Dezrez.People.Command.AddContactItem.ContactItemSaveCommandDataContract[]>contactItemsTempArray;

         }
   }


   export class AddGroupResponseDataContract {
      GroupId: number;
      IsSuccess: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.IsSuccess = jsonData.IsSuccess;
         }
   }

}

export module Dezrez.Group.Command.SaveAdditionalInfo {

   export class SaveAdditionalInfoCommandDataContract {
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
         }
   }

}

export module Dezrez.Group.Command.SendSMS {

   export class SendGroupSMSDataContract {
      ContactItemIds: Array<number>;
      Message: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      GroupId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ContactItemIds = (<number[]>jsonData.ContactItemIds);
            this.Message = jsonData.Message;
            this.PreferredProviderId = jsonData.PreferredProviderId;
            this.BrandId = jsonData.BrandId;
            this.FranchiseId = jsonData.FranchiseId;
            this.GroupId = jsonData.GroupId;
         }
   }

}

export module Dezrez.People.Command.UpdatePerson {

   export class PersonSaveCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Addresses: Array<Dezrez.Location.Command.ContactAddressSaveCommandDataContract>;
      ArchivedAddresses: Array<Dezrez.Location.Command.ContactAddressSaveCommandDataContract>;
      ContactItems: Array<Dezrez.People.Command.AddContactItem.ContactItemSaveCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            var addressesTempArray = _.map(jsonData.Addresses, item => { return new Dezrez.Location.Command.ContactAddressSaveCommandDataContract(item);  });
            this.Addresses = <Dezrez.Location.Command.ContactAddressSaveCommandDataContract[]>addressesTempArray;

            var archivedAddressesTempArray = _.map(jsonData.ArchivedAddresses, item => { return new Dezrez.Location.Command.ContactAddressSaveCommandDataContract(item);  });
            this.ArchivedAddresses = <Dezrez.Location.Command.ContactAddressSaveCommandDataContract[]>archivedAddressesTempArray;

            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Command.AddContactItem.ContactItemSaveCommandDataContract(item);  });
            this.ContactItems = <Dezrez.People.Command.AddContactItem.ContactItemSaveCommandDataContract[]>contactItemsTempArray;

         }
   }


   export class SetPersonPaymentDetailsCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      AccountId: number;
      AccountHolder: string;
      SortCode: string;
      AccountNumber: string;
      HeldWith: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AccountId = jsonData.AccountId;
            this.AccountHolder = jsonData.AccountHolder;
            this.SortCode = jsonData.SortCode;
            this.AccountNumber = jsonData.AccountNumber;
            this.HeldWith = jsonData.HeldWith;
         }
   }

}

export module Dezrez.People.Command.UpdatePeople {

   export class PeopleSaveCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      People: Array<Dezrez.People.Command.UpdatePerson.PersonSaveCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var peopleTempArray = _.map(jsonData.People, item => { return new Dezrez.People.Command.UpdatePerson.PersonSaveCommandDataContract(item);  });
            this.People = <Dezrez.People.Command.UpdatePerson.PersonSaveCommandDataContract[]>peopleTempArray;

         }
   }

}

export module Dezrez.People.Command.SendNotification {

   export class SendNotificationToPersonCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      NotificationTitle: string;
      MessageContent: string;
      AssociatedLinks: Array<Dezrez.Core.DataContracts.External.SecurityAwareLink>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NotificationTitle = jsonData.NotificationTitle;
            this.MessageContent = jsonData.MessageContent;
            var associatedLinksTempArray = _.map(jsonData.AssociatedLinks, item => { return new Dezrez.Core.DataContracts.External.SecurityAwareLink(item);  });
            this.AssociatedLinks = <Dezrez.Core.DataContracts.External.SecurityAwareLink[]>associatedLinksTempArray;

            this.Id = jsonData.Id;
         }
   }

}

export module Dezrez.Group.Command.SetGroupDescription {

   export class SetGroupDescriptionCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Description = jsonData.Description;
         }
   }

}

export module Dezrez.Property.Command.RecordValuation {

   export class RecordValuationFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      FeeCategoryType: Dezrez.System.EnumDataContract;
      FeeChargeType: Dezrez.System.EnumDataContract;
      FeeLiabilityType: Dezrez.System.EnumDataContract;
      FeeFrequency: Dezrez.System.EnumDataContract;
      ApplyTax: boolean;
      VatValue: number;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Property.Command.RecordValuation.RecordValuationScaleableFeeDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      PersistAsBranchFee: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.FeeValueType = new Dezrez.System.EnumDataContract(jsonData.FeeValueType);
            this.FeeCategoryType = new Dezrez.System.EnumDataContract(jsonData.FeeCategoryType);
            this.FeeChargeType = new Dezrez.System.EnumDataContract(jsonData.FeeChargeType);
            this.FeeLiabilityType = new Dezrez.System.EnumDataContract(jsonData.FeeLiabilityType);
            this.FeeFrequency = new Dezrez.System.EnumDataContract(jsonData.FeeFrequency);
            this.ApplyTax = jsonData.ApplyTax;
            this.VatValue = jsonData.VatValue;
            this.DefaultValue = jsonData.DefaultValue;
            var scaleableFeesTempArray = _.map(jsonData.ScaleableFees, item => { return new Dezrez.Property.Command.RecordValuation.RecordValuationScaleableFeeDataContract(item);  });
            this.ScaleableFees = <Dezrez.Property.Command.RecordValuation.RecordValuationScaleableFeeDataContract[]>scaleableFeesTempArray;

            this.Notes = jsonData.Notes;
            this.TransactionType = new Dezrez.System.EnumDataContract(jsonData.TransactionType);
            this.PersistAsBranchFee = jsonData.PersistAsBranchFee;
         }
   }


   export class RecordValuationScaleableFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Threshold: number;
      Value: number;
      ThresholdType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Threshold = jsonData.Threshold;
            this.Value = jsonData.Value;
            this.ThresholdType = new Dezrez.System.EnumDataContract(jsonData.ThresholdType);
         }
   }


   export class RecordValuationDataContract {
      DateTime: DateHelper;
      ValuationAppointmentId: number;
      PropertyId: number;
      AddressId: number;
      UpperValue: number;
      LowerValue: number;
      SuggestedValue: number;
      PriceQualifierType: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      PriceText: string;
      NegotiatorIds: Array<number>;
      Fees: Array<Dezrez.Property.Command.RecordValuation.RecordValuationFeeDataContract>;
      AgencyType: Dezrez.System.EnumDataContract;
      ValuationType: Dezrez.System.EnumDataContract;
      PriceOnApplication: boolean;
      AvailableDate: DateHelper;
      Term: Dezrez.System.EnumDataContract;
      ServiceLevel: Dezrez.System.EnumDataContract;
      FurnishLevel: Dezrez.System.EnumDataContract;
      ValuationNote: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.ValuationAppointmentId = jsonData.ValuationAppointmentId;
            this.PropertyId = jsonData.PropertyId;
            this.AddressId = jsonData.AddressId;
            this.UpperValue = jsonData.UpperValue;
            this.LowerValue = jsonData.LowerValue;
            this.SuggestedValue = jsonData.SuggestedValue;
            this.PriceQualifierType = new Dezrez.System.EnumDataContract(jsonData.PriceQualifierType);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.PriceText = jsonData.PriceText;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            var feesTempArray = _.map(jsonData.Fees, item => { return new Dezrez.Property.Command.RecordValuation.RecordValuationFeeDataContract(item);  });
            this.Fees = <Dezrez.Property.Command.RecordValuation.RecordValuationFeeDataContract[]>feesTempArray;

            this.AgencyType = new Dezrez.System.EnumDataContract(jsonData.AgencyType);
            this.ValuationType = new Dezrez.System.EnumDataContract(jsonData.ValuationType);
            this.PriceOnApplication = jsonData.PriceOnApplication;
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.ServiceLevel = new Dezrez.System.EnumDataContract(jsonData.ServiceLevel);
            this.FurnishLevel = new Dezrez.System.EnumDataContract(jsonData.FurnishLevel);
            this.ValuationNote = jsonData.ValuationNote;
         }
   }


   export class RecordValuationResponseDataContract {
      PropertyId: number;
      ValuedId: number;
      ValuationAppointmentId: number;
      RoleId: number;
      IsSuccess: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyId = jsonData.PropertyId;
            this.ValuedId = jsonData.ValuedId;
            this.ValuationAppointmentId = jsonData.ValuationAppointmentId;
            this.RoleId = jsonData.RoleId;
            this.IsSuccess = jsonData.IsSuccess;
         }
   }

}

export module Dezrez.Property.Command.RecordContact {

   export class RoleRecordEnquiryDataContract {
      GroupId: number;
      RoleId: number;
      MethodOfContact: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      NatureOfEnquiry: Dezrez.System.EnumDataContract;
      AdditionalInfo: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.RoleId = jsonData.RoleId;
            this.MethodOfContact = new Dezrez.System.EnumDataContract(jsonData.MethodOfContact);
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.NatureOfEnquiry = new Dezrez.System.EnumDataContract(jsonData.NatureOfEnquiry);
            this.AdditionalInfo = jsonData.AdditionalInfo;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class RecordGroupContactDataContract {
      GroupId: number;
      PersonId: number;
      ContactContext: Dezrez.System.EnumDataContract;
      MethodOfContact: Dezrez.System.EnumDataContract;
      OwnerContactSubject: Dezrez.System.EnumDataContract;
      AdditionalInfo: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.PersonId = jsonData.PersonId;
            this.ContactContext = new Dezrez.System.EnumDataContract(jsonData.ContactContext);
            this.MethodOfContact = new Dezrez.System.EnumDataContract(jsonData.MethodOfContact);
            this.OwnerContactSubject = new Dezrez.System.EnumDataContract(jsonData.OwnerContactSubject);
            this.AdditionalInfo = jsonData.AdditionalInfo;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class RecordOwnerContactDataContract {
      OwnerPersonId: number;
      RoleId: number;
      ContactContext: Dezrez.System.EnumDataContract;
      MethodOfContact: Dezrez.System.EnumDataContract;
      OwnerContactSubject: Dezrez.System.EnumDataContract;
      AdditionalInfo: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.OwnerPersonId = jsonData.OwnerPersonId;
            this.RoleId = jsonData.RoleId;
            this.ContactContext = new Dezrez.System.EnumDataContract(jsonData.ContactContext);
            this.MethodOfContact = new Dezrez.System.EnumDataContract(jsonData.MethodOfContact);
            this.OwnerContactSubject = new Dezrez.System.EnumDataContract(jsonData.OwnerContactSubject);
            this.AdditionalInfo = jsonData.AdditionalInfo;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class RecordPropertyOwnerContactDataContract {
      PropertyId: number;
      RoleId: number;
      ContactContext: Dezrez.System.EnumDataContract;
      MethodOfContact: Dezrez.System.EnumDataContract;
      OwnerContactSubject: Dezrez.System.EnumDataContract;
      AdditionalInfo: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyId = jsonData.PropertyId;
            this.RoleId = jsonData.RoleId;
            this.ContactContext = new Dezrez.System.EnumDataContract(jsonData.ContactContext);
            this.MethodOfContact = new Dezrez.System.EnumDataContract(jsonData.MethodOfContact);
            this.OwnerContactSubject = new Dezrez.System.EnumDataContract(jsonData.OwnerContactSubject);
            this.AdditionalInfo = jsonData.AdditionalInfo;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }

}

export module Dezrez.Property.Command.UpdateValuation {

   export class UpdateValuationFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      FeeCategoryType: Dezrez.System.EnumDataContract;
      FeeChargeType: Dezrez.System.EnumDataContract;
      FeeLiabilityType: Dezrez.System.EnumDataContract;
      FeeFrequency: Dezrez.System.EnumDataContract;
      ApplyTax: boolean;
      VatValue: number;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Property.Command.UpdateValuation.UpdateValuationScaleableFeeDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.FeeValueType = new Dezrez.System.EnumDataContract(jsonData.FeeValueType);
            this.FeeCategoryType = new Dezrez.System.EnumDataContract(jsonData.FeeCategoryType);
            this.FeeChargeType = new Dezrez.System.EnumDataContract(jsonData.FeeChargeType);
            this.FeeLiabilityType = new Dezrez.System.EnumDataContract(jsonData.FeeLiabilityType);
            this.FeeFrequency = new Dezrez.System.EnumDataContract(jsonData.FeeFrequency);
            this.ApplyTax = jsonData.ApplyTax;
            this.VatValue = jsonData.VatValue;
            this.DefaultValue = jsonData.DefaultValue;
            var scaleableFeesTempArray = _.map(jsonData.ScaleableFees, item => { return new Dezrez.Property.Command.UpdateValuation.UpdateValuationScaleableFeeDataContract(item);  });
            this.ScaleableFees = <Dezrez.Property.Command.UpdateValuation.UpdateValuationScaleableFeeDataContract[]>scaleableFeesTempArray;

            this.Notes = jsonData.Notes;
            this.TransactionType = new Dezrez.System.EnumDataContract(jsonData.TransactionType);
         }
   }


   export class UpdateValuationScaleableFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Threshold: number;
      Value: number;
      ThresholdType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Threshold = jsonData.Threshold;
            this.Value = jsonData.Value;
            this.ThresholdType = new Dezrez.System.EnumDataContract(jsonData.ThresholdType);
         }
   }


   export class UpdateValuationDataContract {
      ValuedId: number;
      DateTime: DateHelper;
      UpperValue: number;
      LowerValue: number;
      SuggestedValue: number;
      PriceQualifierType: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      PriceText: string;
      Fees: Array<Dezrez.Property.Command.UpdateValuation.UpdateValuationFeeDataContract>;
      AgencyType: Dezrez.System.EnumDataContract;
      PriceOnApplication: boolean;
      AvailableDate: DateHelper;
      Term: Dezrez.System.EnumDataContract;
      ServiceLevel: Dezrez.System.EnumDataContract;
      FurnishLevel: Dezrez.System.EnumDataContract;
      ValuationNote: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ValuedId = jsonData.ValuedId;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.UpperValue = jsonData.UpperValue;
            this.LowerValue = jsonData.LowerValue;
            this.SuggestedValue = jsonData.SuggestedValue;
            this.PriceQualifierType = new Dezrez.System.EnumDataContract(jsonData.PriceQualifierType);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.PriceText = jsonData.PriceText;
            var feesTempArray = _.map(jsonData.Fees, item => { return new Dezrez.Property.Command.UpdateValuation.UpdateValuationFeeDataContract(item);  });
            this.Fees = <Dezrez.Property.Command.UpdateValuation.UpdateValuationFeeDataContract[]>feesTempArray;

            this.AgencyType = new Dezrez.System.EnumDataContract(jsonData.AgencyType);
            this.PriceOnApplication = jsonData.PriceOnApplication;
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.ServiceLevel = new Dezrez.System.EnumDataContract(jsonData.ServiceLevel);
            this.FurnishLevel = new Dezrez.System.EnumDataContract(jsonData.FurnishLevel);
            this.ValuationNote = jsonData.ValuationNote;
         }
   }

}

export module Dezrez.Property.Command.BookValuation {

   export class BookValuationPropertyCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Command.AddressSaveCommandDataContract;
      Origin: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Command.AddressSaveCommandDataContract(jsonData.Address);
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
         }
   }


   export class BookValuationCommandDataContract {
      Id: number;
      Property: Dezrez.Property.Command.BookValuation.BookValuationPropertyCommandDataContract;
      Group: Dezrez.Group.Command.AddGroup.AddGroupCommandDataContract;
      AppointmentDetail: Dezrez.Events.Appointments.Command.AppointmentDetailCommandDataContract;
      AmenityDescription: Dezrez.Property.Command.BookValuation.Descriptions.BookValuationAmenityDescriptionCommandDataContract;
      RoomCountDescription: Dezrez.Property.Command.BookValuation.Descriptions.BookValuationRoomCountDescriptionCommandDataContract;
      StyleAgeDescription: Dezrez.Property.Command.BookValuation.Descriptions.BookValuationStyleAgeDescriptionCommandDataContract;
      ValuationNotes: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Property = new Dezrez.Property.Command.BookValuation.BookValuationPropertyCommandDataContract(jsonData.Property);
            this.Group = new Dezrez.Group.Command.AddGroup.AddGroupCommandDataContract(jsonData.Group);
            this.AppointmentDetail = new Dezrez.Events.Appointments.Command.AppointmentDetailCommandDataContract(jsonData.AppointmentDetail);
            this.AmenityDescription = new Dezrez.Property.Command.BookValuation.Descriptions.BookValuationAmenityDescriptionCommandDataContract(jsonData.AmenityDescription);
            this.RoomCountDescription = new Dezrez.Property.Command.BookValuation.Descriptions.BookValuationRoomCountDescriptionCommandDataContract(jsonData.RoomCountDescription);
            this.StyleAgeDescription = new Dezrez.Property.Command.BookValuation.Descriptions.BookValuationStyleAgeDescriptionCommandDataContract(jsonData.StyleAgeDescription);
            this.ValuationNotes = jsonData.ValuationNotes;
         }
   }


   export class BookValuationResponseDataContract {
      PropertyId: number;
      GroupId: number;
      ValuationAppointmentId: number;
      IsSuccess: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyId = jsonData.PropertyId;
            this.GroupId = jsonData.GroupId;
            this.ValuationAppointmentId = jsonData.ValuationAppointmentId;
            this.IsSuccess = jsonData.IsSuccess;
         }
   }

}

export module Dezrez.Property.Command.AddAlarm {

   export class PropertyAlarmAddDataContract {
      Name: string;
      Code: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Code = jsonData.Code;
         }
   }

}

export module Dezrez.Property.Command.AddKey {

   export class PropertyKeyAddDataContract {
      Name: string;
      Code: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Code = jsonData.Code;
         }
   }

}

export module Dezrez.Property.Command.AddSpecialArrangement {

   export class PropertySpecialArrangementAddDataContract {
      Type: Dezrez.System.EnumDataContract;
      Text: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Text = jsonData.Text;
         }
   }

}

export module Dezrez.Property.Command.CheckinKeys {

   export class PropertyKeyCheckInDataContract {
      KeyId: number;
      Note: string;
      PermanentOverride: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.KeyId = jsonData.KeyId;
            this.Note = jsonData.Note;
            this.PermanentOverride = jsonData.PermanentOverride;
         }
   }

}

export module Dezrez.Property.Command.CheckoutKeys {

   export class PropertyKeyCheckOutDataContract {
      KeyId: number;
      GroupId: number;
      RecipientId: number;
      RecipientType: Dezrez.System.EnumDataContract;
      Note: string;
      IsPermanent: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.KeyId = jsonData.KeyId;
            this.GroupId = jsonData.GroupId;
            this.RecipientId = jsonData.RecipientId;
            this.RecipientType = new Dezrez.System.EnumDataContract(jsonData.RecipientType);
            this.Note = jsonData.Note;
            this.IsPermanent = jsonData.IsPermanent;
         }
   }

}

export module Dezrez.Property.Command.AddGroupToProperty {

   export class AddGroupToPropertyCommandDataContract {
      Group: Dezrez.Group.Command.AddGroup.AddGroupCommandDataContract;
      OwnedSince: DateHelper;
      ForceUpdate: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Group = new Dezrez.Group.Command.AddGroup.AddGroupCommandDataContract(jsonData.Group);
            this.OwnedSince = new DateHelper(jsonData.OwnedSince, null, true);
            this.ForceUpdate = jsonData.ForceUpdate;
         }
   }

}

export module Dezrez.Property.Command.AddProperty {

   export class AddPropertyCommandDataContract {
      Property: Dezrez.Property.Command.AddProperty.PropertyCommandDataContract;
      AmenityDescription: Dezrez.Property.Command.BookValuation.Descriptions.BookValuationAmenityDescriptionCommandDataContract;
      RoomCountDescription: Dezrez.Property.Command.BookValuation.Descriptions.BookValuationRoomCountDescriptionCommandDataContract;
      StyleAgeDescription: Dezrez.Property.Command.BookValuation.Descriptions.BookValuationStyleAgeDescriptionCommandDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Property = new Dezrez.Property.Command.AddProperty.PropertyCommandDataContract(jsonData.Property);
            this.AmenityDescription = new Dezrez.Property.Command.BookValuation.Descriptions.BookValuationAmenityDescriptionCommandDataContract(jsonData.AmenityDescription);
            this.RoomCountDescription = new Dezrez.Property.Command.BookValuation.Descriptions.BookValuationRoomCountDescriptionCommandDataContract(jsonData.RoomCountDescription);
            this.StyleAgeDescription = new Dezrez.Property.Command.BookValuation.Descriptions.BookValuationStyleAgeDescriptionCommandDataContract(jsonData.StyleAgeDescription);
         }
   }


   export class PropertyCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Command.AddressSaveCommandDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Command.AddressSaveCommandDataContract(jsonData.Address);
         }
   }

}

export module Dezrez.Property.Query.Get {

   export class PropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      Keys: Array<Dezrez.Property.Query.Get.PropertyKeyDataContract>;
      Alarms: Array<Dezrez.Property.Query.Get.PropertyAlarmDataContract>;
      Roles: Array<Dezrez.Role.Query.Get.RoleDataContract>;
      InactiveRoleIds: Array<number>;
      SpecialArrangements: Array<Dezrez.Property.Query.Get.PropertySpecialArrangementDataContract>;
      SystemStatusName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            var keysTempArray = _.map(jsonData.Keys, item => { return new Dezrez.Property.Query.Get.PropertyKeyDataContract(item);  });
            this.Keys = <Dezrez.Property.Query.Get.PropertyKeyDataContract[]>keysTempArray;

            var alarmsTempArray = _.map(jsonData.Alarms, item => { return new Dezrez.Property.Query.Get.PropertyAlarmDataContract(item);  });
            this.Alarms = <Dezrez.Property.Query.Get.PropertyAlarmDataContract[]>alarmsTempArray;

            var rolesTempArray = _.map(jsonData.Roles, (item: any) => {
               return new Dezrez.Role.Query.Get.RoleDataContract(item);
            });
            this.Roles = <Dezrez.Role.Query.Get.RoleDataContract[]>rolesTempArray;

            this.InactiveRoleIds = (<number[]>jsonData.InactiveRoleIds);
            var specialArrangementsTempArray = _.map(jsonData.SpecialArrangements, item => { return new Dezrez.Property.Query.Get.PropertySpecialArrangementDataContract(item);  });
            this.SpecialArrangements = <Dezrez.Property.Query.Get.PropertySpecialArrangementDataContract[]>specialArrangementsTempArray;

            this.SystemStatusName = jsonData.SystemStatusName;
         }
   }


   export class PropertyAlarmDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Code: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Code = jsonData.Code;
         }
   }


   export class PropertyKeyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Code: string;
      IsCheckedOut: boolean;
      IsPermanent: boolean;
      CheckedInAt: DateHelper;
      CheckedInBy: Dezrez.Property.Query.Keys.KeyNegotiatorDataContract;
      NoteOnCheckIn: string;
      CheckedOutAt: DateHelper;
      CheckedOutBy: Dezrez.Property.Query.Keys.KeyNegotiatorDataContract;
      NoteOnCheckOut: string;
      RecipientDetails: Dezrez.Property.Query.Keys.KeyRecipientDetailsDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Code = jsonData.Code;
            this.IsCheckedOut = jsonData.IsCheckedOut;
            this.IsPermanent = jsonData.IsPermanent;
            this.CheckedInAt = new DateHelper(jsonData.CheckedInAt, null, true);
            this.CheckedInBy = new Dezrez.Property.Query.Keys.KeyNegotiatorDataContract(jsonData.CheckedInBy);
            this.NoteOnCheckIn = jsonData.NoteOnCheckIn;
            this.CheckedOutAt = new DateHelper(jsonData.CheckedOutAt, null, true);
            this.CheckedOutBy = new Dezrez.Property.Query.Keys.KeyNegotiatorDataContract(jsonData.CheckedOutBy);
            this.NoteOnCheckOut = jsonData.NoteOnCheckOut;
            this.RecipientDetails = new Dezrez.Property.Query.Keys.KeyRecipientDetailsDataContract(jsonData.RecipientDetails);
         }
   }


   export class PropertySpecialArrangementDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Text: string;
      SpecialArrangementType: Dezrez.System.EnumDataContract;
      ApplicableToGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Text = jsonData.Text;
            this.SpecialArrangementType = new Dezrez.System.EnumDataContract(jsonData.SpecialArrangementType);
            this.ApplicableToGroupIds = (<number[]>jsonData.ApplicableToGroupIds);
         }
   }

}

export module Dezrez.Property.Query.Alarms {

   export class AlarmDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      Code: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Code = jsonData.Code;
         }
   }

}

export module Dezrez.Negotiators.Query.Properties {

   export class NegotiatorPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      ActiveSalesRoleId: number;
      AskingPrice: number;
      SalesRolePrimaryImage: Dezrez.Media.DocumentDataContract;
      ActiveLettingRoleId: number;
      RentalPrice: number;
      RentalPeriod: Dezrez.System.EnumDataContract;
      Term: Dezrez.System.EnumDataContract;
      LettingRolePrimaryImage: Dezrez.Media.DocumentDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.ActiveSalesRoleId = jsonData.ActiveSalesRoleId;
            this.AskingPrice = jsonData.AskingPrice;
            this.SalesRolePrimaryImage = new Dezrez.Media.DocumentDataContract(jsonData.SalesRolePrimaryImage);
            this.ActiveLettingRoleId = jsonData.ActiveLettingRoleId;
            this.RentalPrice = jsonData.RentalPrice;
            this.RentalPeriod = new Dezrez.System.EnumDataContract(jsonData.RentalPeriod);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.LettingRolePrimaryImage = new Dezrez.Media.DocumentDataContract(jsonData.LettingRolePrimaryImage);
         }
   }

}

export module Dezrez.SpecialArrangements.Query {

   export class SpecialArrangementDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Text: string;
      SpecialArrangementType: Dezrez.System.EnumDataContract;
      ApplicableToGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Text = jsonData.Text;
            this.SpecialArrangementType = new Dezrez.System.EnumDataContract(jsonData.SpecialArrangementType);
            this.ApplicableToGroupIds = (<number[]>jsonData.ApplicableToGroupIds);
         }
   }

}

export module Dezrez.Agency.Query.Portals {

   export class PortalConfigurationDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      PortalId: number;
      BranchId: number;
      BranchName: string;
      BrandId: number;
      BrandName: string;
      IncludeSalesRoles: boolean;
      IncludeLettingsRoles: boolean;
      IsLive: boolean;
      IncludeUnderOffer: boolean;
      IncludeOfferAccepted: boolean;
      BranchReference: string;
      BatchFormat: string;
      PictureWidth: number;
      FloorplanWidth: number;
      AdditionalSettings: any;
      UseTestMode: boolean;
      NegotiatorId: number;
      SystemStatusName: string;
      ExclusiveHours: number;
      ImageResetActivated: boolean;
      RolesToPerformImageReset: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PortalId = jsonData.PortalId;
            this.BranchId = jsonData.BranchId;
            this.BranchName = jsonData.BranchName;
            this.BrandId = jsonData.BrandId;
            this.BrandName = jsonData.BrandName;
            this.IncludeSalesRoles = jsonData.IncludeSalesRoles;
            this.IncludeLettingsRoles = jsonData.IncludeLettingsRoles;
            this.IsLive = jsonData.IsLive;
            this.IncludeUnderOffer = jsonData.IncludeUnderOffer;
            this.IncludeOfferAccepted = jsonData.IncludeOfferAccepted;
            this.BranchReference = jsonData.BranchReference;
            this.BatchFormat = jsonData.BatchFormat;
            this.PictureWidth = jsonData.PictureWidth;
            this.FloorplanWidth = jsonData.FloorplanWidth;
            this.AdditionalSettings = jsonData.AdditionalSettings;
            this.UseTestMode = jsonData.UseTestMode;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.SystemStatusName = jsonData.SystemStatusName;
            this.ExclusiveHours = jsonData.ExclusiveHours;
            this.ImageResetActivated = jsonData.ImageResetActivated;
            this.RolesToPerformImageReset = (<number[]>jsonData.RolesToPerformImageReset);
         }
   }


   export class PortalCustomisationDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      PortalId: number;
      BrandId: number;
      DescriptionOrder: Array<Dezrez.Agency.Query.Portals.PortalDescriptionOrderDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PortalId = jsonData.PortalId;
            this.BrandId = jsonData.BrandId;
            var descriptionOrderTempArray = _.map(jsonData.DescriptionOrder, item => { return new Dezrez.Agency.Query.Portals.PortalDescriptionOrderDataContract(item);  });
            this.DescriptionOrder = <Dezrez.Agency.Query.Portals.PortalDescriptionOrderDataContract[]>descriptionOrderTempArray;

         }
   }


   export class PortalDescriptionOrderDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      DescriptionType: Dezrez.System.EnumDataContract;
      Name: string;
      Order: number;
      IsActive: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DescriptionType = new Dezrez.System.EnumDataContract(jsonData.DescriptionType);
            this.Name = jsonData.Name;
            this.Order = jsonData.Order;
            this.IsActive = jsonData.IsActive;
         }
   }

}

export module Dezrez.Negotiators.Query.Get {

   export class BasicNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Initials: string;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Initials = jsonData.Initials;
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class NegotiatorDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      AgencyId: number;
      Initials: string;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      CurrentStatus: number;
      ContactItems: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      ClaimedTask: Dezrez.Negotiators.Query.Get.ToDoTaskDataContract;
      Biography: string;
      SystemStatus: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AgencyId = jsonData.AgencyId;
            this.Initials = jsonData.Initials;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
            this.CurrentStatus = jsonData.CurrentStatus;
            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.ContactItems = <Dezrez.People.Query.Get.ContactItemDataContract[]>contactItemsTempArray;

            this.ClaimedTask = new Dezrez.Negotiators.Query.Get.ToDoTaskDataContract(jsonData.ClaimedTask);
            this.Biography = jsonData.Biography;
            this.SystemStatus = jsonData.SystemStatus;
         }
   }


   export class NegotiatorOrderDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      NegotiatorId: number;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NegotiatorId = jsonData.NegotiatorId;
            this.Order = jsonData.Order;
         }
   }


   export class NegotiatorStatusDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class NegotiatorStatusResultDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Status: string;
      StatusValue: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Status = jsonData.Status;
            this.StatusValue = jsonData.StatusValue;
         }
   }


   export class ToDoTaskDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ToDo: Dezrez.ToDo.Query.ActiveToDoDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToDo = new Dezrez.ToDo.Query.ActiveToDoDataContract(jsonData.ToDo);
         }
   }


   export class NegotiatorPreferencesDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      CalendarViews: Array<Dezrez.Negotiators.Query.Get.NegotiatorPreferencesCalendarViewDataContract>;
      Reminders: Dezrez.Negotiators.Query.Get.NegotiatorPreferenceRemindersDataContract;
      Notifications: Dezrez.Negotiators.Query.Get.NegotiatorPreferenceNotificationsDataContract;
      Email: Dezrez.Negotiators.Query.Get.NegotiatorPreferenceEmailDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var calendarViewsTempArray = _.map(jsonData.CalendarViews, item => { return new Dezrez.Negotiators.Query.Get.NegotiatorPreferencesCalendarViewDataContract(item);  });
            this.CalendarViews = <Dezrez.Negotiators.Query.Get.NegotiatorPreferencesCalendarViewDataContract[]>calendarViewsTempArray;

            this.Reminders = new Dezrez.Negotiators.Query.Get.NegotiatorPreferenceRemindersDataContract(jsonData.Reminders);
            this.Notifications = new Dezrez.Negotiators.Query.Get.NegotiatorPreferenceNotificationsDataContract(jsonData.Notifications);
            this.Email = new Dezrez.Negotiators.Query.Get.NegotiatorPreferenceEmailDataContract(jsonData.Email);
         }
   }


   export class NegotiatorPreferencesCalendarViewDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Negotiators: Array<Dezrez.Negotiators.Query.Get.NegotiatorCalendarViewDataContract>;
      NegotiatorOrder: Array<Dezrez.Negotiators.Query.Get.NegotiatorOrderDataContract>;
      CalendarViewType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Negotiators.Query.Get.NegotiatorCalendarViewDataContract(item);  });
            this.Negotiators = <Dezrez.Negotiators.Query.Get.NegotiatorCalendarViewDataContract[]>negotiatorsTempArray;

            var negotiatorOrderTempArray = _.map(jsonData.NegotiatorOrder, item => { return new Dezrez.Negotiators.Query.Get.NegotiatorOrderDataContract(item);  });
            this.NegotiatorOrder = <Dezrez.Negotiators.Query.Get.NegotiatorOrderDataContract[]>negotiatorOrderTempArray;

            this.CalendarViewType = new Dezrez.System.EnumDataContract(jsonData.CalendarViewType);
         }
   }


   export class NegotiatorCalendarViewDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Email: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Email = jsonData.Email;
         }
   }


   export class BoolTypePairDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Key: Dezrez.System.EnumDataContract;
      Value: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Key = new Dezrez.System.EnumDataContract(jsonData.Key);
            this.Value = jsonData.Value;
         }
   }


   export class NegotiatorPreferenceEmailDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      SyncFlagged: boolean;
      SyncFolder: boolean;
      SyncInlineImages: boolean;
      SmtpUsername: string;
      SmptPassword: string;
      ImapUsername: string;
      ImapPassword: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.SyncFlagged = jsonData.SyncFlagged;
            this.SyncFolder = jsonData.SyncFolder;
            this.SyncInlineImages = jsonData.SyncInlineImages;
            this.SmtpUsername = jsonData.SmtpUsername;
            this.SmptPassword = jsonData.SmptPassword;
            this.ImapUsername = jsonData.ImapUsername;
            this.ImapPassword = jsonData.ImapPassword;
         }
   }


   export class NegotiatorPreferenceNotificationsDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ByEmail: boolean;
      BySms: boolean;
      ByNotification: boolean;
      NotifyOf: Array<Dezrez.Negotiators.Query.Get.BoolTypePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ByEmail = jsonData.ByEmail;
            this.BySms = jsonData.BySms;
            this.ByNotification = jsonData.ByNotification;
            var notifyOfTempArray = _.map(jsonData.NotifyOf, item => { return new Dezrez.Negotiators.Query.Get.BoolTypePairDataContract(item);  });
            this.NotifyOf = <Dezrez.Negotiators.Query.Get.BoolTypePairDataContract[]>notifyOfTempArray;

         }
   }


   export class NegotiatorPreferenceRemindersDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ByEmail: boolean;
      BySms: boolean;
      ByNotification: boolean;
      When: Array<Dezrez.Negotiators.Query.Get.BoolTypePairDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ByEmail = jsonData.ByEmail;
            this.BySms = jsonData.BySms;
            this.ByNotification = jsonData.ByNotification;
            var whenTempArray = _.map(jsonData.When, item => { return new Dezrez.Negotiators.Query.Get.BoolTypePairDataContract(item);  });
            this.When = <Dezrez.Negotiators.Query.Get.BoolTypePairDataContract[]>whenTempArray;

         }
   }


   export class NegotiatorTimelinePreferencesDataContract {
      Id: number;
      PropertyView: Dezrez.Negotiators.Query.Get.NegotiatorTimelineViewDataContract;
      GroupView: Dezrez.Negotiators.Query.Get.NegotiatorTimelineViewDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.PropertyView = new Dezrez.Negotiators.Query.Get.NegotiatorTimelineViewDataContract(jsonData.PropertyView);
            this.GroupView = new Dezrez.Negotiators.Query.Get.NegotiatorTimelineViewDataContract(jsonData.GroupView);
         }
   }


   export class NegotiatorTimelineViewDataContract {
      Notes: boolean;
      Activities: boolean;
      Appointments: boolean;
      Filter: string;
      TabularView: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Notes = jsonData.Notes;
            this.Activities = jsonData.Activities;
            this.Appointments = jsonData.Appointments;
            this.Filter = jsonData.Filter;
            this.TabularView = jsonData.TabularView;
         }
   }

}

export module Dezrez.Agency.Query.Teams {

   export class BaseTeamMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      JobTitle: string;
      Gender: Dezrez.System.EnumDataContract;
      TeamRelationshipType: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Note: string;
      ContactName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.JobTitle = jsonData.JobTitle;
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.TeamRelationshipType = new Dezrez.System.EnumDataContract(jsonData.TeamRelationshipType);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.Note = jsonData.Note;
            this.ContactName = jsonData.ContactName;
         }
   }


   export class TeamDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      Notes: string;
      Members: Array<Dezrez.Agency.Query.Teams.TeamMemberListDataContract>;
      TeamType: Dezrez.System.EnumDataContract;
      Responsibilities: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.Notes = jsonData.Notes;
            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Agency.Query.Teams.TeamMemberListDataContract(item);  });
            this.Members = <Dezrez.Agency.Query.Teams.TeamMemberListDataContract[]>membersTempArray;

            this.TeamType = new Dezrez.System.EnumDataContract(jsonData.TeamType);
            var responsibilitiesTempArray = _.map(jsonData.Responsibilities, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Responsibilities = <Dezrez.System.EnumDataContract[]>responsibilitiesTempArray;

         }
   }


   export class BranchTeamListMemberDataContract extends Dezrez.Agency.Query.Teams.BaseTeamMemberDataContract {
      JobTitle: string;
      Gender: Dezrez.System.EnumDataContract;
      TeamRelationshipType: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Note: string;
      ContactName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class AgencyTeamListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      TeamType: Dezrez.System.EnumDataContract;
      Responsibilities: Array<Dezrez.System.EnumDataContract>;
      Members: Array<Dezrez.Agency.Query.Teams.AgencyTeamMemberListDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.TeamType = new Dezrez.System.EnumDataContract(jsonData.TeamType);
            var responsibilitiesTempArray = _.map(jsonData.Responsibilities, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Responsibilities = <Dezrez.System.EnumDataContract[]>responsibilitiesTempArray;

            var membersTempArray = _.map(jsonData.Members, item => { return new Dezrez.Agency.Query.Teams.AgencyTeamMemberListDataContract(item);  });
            this.Members = <Dezrez.Agency.Query.Teams.AgencyTeamMemberListDataContract[]>membersTempArray;

         }
   }


   export class AgencyTeamMemberListDataContract extends Dezrez.Agency.Query.Teams.BaseTeamMemberDataContract {
      JobTitle: string;
      Gender: Dezrez.System.EnumDataContract;
      TeamRelationshipType: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Note: string;
      ContactName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class TeamMemberListDataContract extends Dezrez.Agency.Query.Teams.BaseTeamMemberDataContract {
      JobTitle: string;
      Gender: Dezrez.System.EnumDataContract;
      TeamRelationshipType: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Note: string;
      ContactName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class TeamMemberDataContract extends Dezrez.Agency.Query.Teams.BaseTeamMemberDataContract {
      JobTitle: string;
      Gender: Dezrez.System.EnumDataContract;
      TeamRelationshipType: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      Note: string;
      ContactName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      ContactItems: Array<Dezrez.People.Query.Get.ContactItemDataContract>;
      CurrentStatus: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            var contactItemsTempArray = _.map(jsonData.ContactItems, item => { return new Dezrez.People.Query.Get.ContactItemDataContract(item);  });
            this.ContactItems = <Dezrez.People.Query.Get.ContactItemDataContract[]>contactItemsTempArray;

            this.CurrentStatus = jsonData.CurrentStatus;
         }
   }

}

export module Dezrez.Agency.Query.Analytics {

   export class CampaignDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class GoogleAnalyticsCampaignDataContract extends Dezrez.Agency.Query.Analytics.CampaignDataContract {
      Name: string;
      Source: string;
      Medium: string;
      Campaign: string;
      Term: string;
      Content: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Source = jsonData.Source;
            this.Medium = jsonData.Medium;
            this.Campaign = jsonData.Campaign;
            this.Term = jsonData.Term;
            this.Content = jsonData.Content;
         }
   }

}

export module Dezrez.Agency.Command.MeetingPlace {

   export class SaveMeetingPlaceDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Location.Command.AddressSaveCommandDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Command.AddressSaveCommandDataContract(jsonData.Address);
            this.Name = jsonData.Name;
         }
   }

}

export module Dezrez.Agency.Command {

   export class CreateSettingDataContract {
      Id: number;
      EntityName: string;
      Name: string;
      Value: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.EntityName = jsonData.EntityName;
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }


   export class AddTeamMemberCommandDataContract {
      NegotiatorId: number;
      TeamRelationshipTypes: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorId = jsonData.NegotiatorId;
            var teamRelationshipTypesTempArray = _.map(jsonData.TeamRelationshipTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.TeamRelationshipTypes = <Dezrez.System.EnumDataContract[]>teamRelationshipTypesTempArray;

         }
   }


   export class RemoveTeamMemberCommandDataContract {
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }

}

export module Dezrez.Agency.Command.Dashboard {

   export class MoveWidgetCommandDataContract {
      SourceDashboardId: number;
      DestinationDashboardId: number;
      WidgetId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SourceDashboardId = jsonData.SourceDashboardId;
            this.DestinationDashboardId = jsonData.DestinationDashboardId;
            this.WidgetId = jsonData.WidgetId;
         }
   }


   export class SetWidgetCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      Description: string;
      Category: Dezrez.System.EnumDataContract;
      ViewType: Dezrez.System.EnumDataContract;
      WidgetType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.Category = new Dezrez.System.EnumDataContract(jsonData.Category);
            this.ViewType = new Dezrez.System.EnumDataContract(jsonData.ViewType);
            this.WidgetType = new Dezrez.System.EnumDataContract(jsonData.WidgetType);
         }
   }


   export class SetDashboardCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
         }
   }


   export class SetInternalWidgetCommandDataContract extends Dezrez.Agency.Command.Dashboard.SetWidgetCommandDataContract {
      Title: string;
      Description: string;
      Category: Dezrez.System.EnumDataContract;
      ViewType: Dezrez.System.EnumDataContract;
      WidgetType: Dezrez.System.EnumDataContract;
      PropertyConfig: Dezrez.Agency.Query.Dashboard.WidgetConfigs.PropertyWidgetConfigDataContract;
      EventConfig: Dezrez.Agency.Query.Dashboard.WidgetConfigs.EventWidgetConfigDataContract;
      GroupConfig: Dezrez.Agency.Query.Dashboard.WidgetConfigs.GroupWidgetConfigDataContract;
      IntervalConfig: Dezrez.Agency.Query.Dashboard.WidgetConfigs.IntervalWidgetConfigDataContract;
      TodoConfig: Dezrez.Agency.Query.Dashboard.WidgetConfigs.TodoWidgetConfigDataContract;
      Layout: Dezrez.Agency.Query.Dashboard.WidgetLayoutDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyConfig = new Dezrez.Agency.Query.Dashboard.WidgetConfigs.PropertyWidgetConfigDataContract(jsonData.PropertyConfig);
            this.EventConfig = new Dezrez.Agency.Query.Dashboard.WidgetConfigs.EventWidgetConfigDataContract(jsonData.EventConfig);
            this.GroupConfig = new Dezrez.Agency.Query.Dashboard.WidgetConfigs.GroupWidgetConfigDataContract(jsonData.GroupConfig);
            this.IntervalConfig = new Dezrez.Agency.Query.Dashboard.WidgetConfigs.IntervalWidgetConfigDataContract(jsonData.IntervalConfig);
            this.TodoConfig = new Dezrez.Agency.Query.Dashboard.WidgetConfigs.TodoWidgetConfigDataContract(jsonData.TodoConfig);
            this.Layout = new Dezrez.Agency.Query.Dashboard.WidgetLayoutDataContract(jsonData.Layout);
         }
   }


   export class ShareDashboardCommandDataContract {
      ShareWithAgency: boolean;
      ShareWithTeams: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ShareWithAgency = jsonData.ShareWithAgency;
            this.ShareWithTeams = (<number[]>jsonData.ShareWithTeams);
         }
   }

}

export module Dezrez.Agency.Query.Dashboard {

   export class WidgetDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Title: string;
      Description: string;
      Category: Dezrez.System.EnumDataContract;
      ViewType: Dezrez.System.EnumDataContract;
      WidgetType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.Category = new Dezrez.System.EnumDataContract(jsonData.Category);
            this.ViewType = new Dezrez.System.EnumDataContract(jsonData.ViewType);
            this.WidgetType = new Dezrez.System.EnumDataContract(jsonData.WidgetType);
         }
   }


   export class DashboardDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      Widgets: Array<Dezrez.Agency.Query.Dashboard.WidgetDataContract>;
      SharedTeams: Array<Dezrez.Agency.Query.Teams.TeamDataContract>;
      SharedWithAgency: boolean;
      Layout: Array<Dezrez.Agency.Query.Dashboard.WidgetLayoutDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            var widgetsTempArray = _.map(jsonData.Widgets, item => { return new Dezrez.Agency.Query.Dashboard.WidgetDataContract(item);  });
            this.Widgets = <Dezrez.Agency.Query.Dashboard.WidgetDataContract[]>widgetsTempArray;

            var sharedTeamsTempArray = _.map(jsonData.SharedTeams, item => { return new Dezrez.Agency.Query.Teams.TeamDataContract(item);  });
            this.SharedTeams = <Dezrez.Agency.Query.Teams.TeamDataContract[]>sharedTeamsTempArray;

            this.SharedWithAgency = jsonData.SharedWithAgency;
            var layoutTempArray = _.map(jsonData.Layout, item => { return new Dezrez.Agency.Query.Dashboard.WidgetLayoutDataContract(item);  });
            this.Layout = <Dezrez.Agency.Query.Dashboard.WidgetLayoutDataContract[]>layoutTempArray;

         }
   }


   export class ExternalWidgetDataContract extends Dezrez.Agency.Query.Dashboard.WidgetDataContract {
      Title: string;
      Description: string;
      Category: Dezrez.System.EnumDataContract;
      ViewType: Dezrez.System.EnumDataContract;
      WidgetType: Dezrez.System.EnumDataContract;
      Url: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Url = jsonData.Url;
         }
   }


   export class InternalWidgetDataContract extends Dezrez.Agency.Query.Dashboard.WidgetDataContract {
      Title: string;
      Description: string;
      Category: Dezrez.System.EnumDataContract;
      ViewType: Dezrez.System.EnumDataContract;
      WidgetType: Dezrez.System.EnumDataContract;
      Config: Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Config = new Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract(jsonData.Config);
         }
   }


   export class WidgetLayoutDataContract {
      X: number;
      Y: number;
      Width: number;
      Height: number;
      WidgetId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.X = jsonData.X;
            this.Y = jsonData.Y;
            this.Width = jsonData.Width;
            this.Height = jsonData.Height;
            this.WidgetId = jsonData.WidgetId;
         }
   }

}

export module Dezrez.Agency.Query.Dashboard.WidgetConfigs {

   export class WidgetConfigDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Interval: Dezrez.System.EnumDataContract;
      Filter: Dezrez.Lists.BaseListFilterDataContract;
      RoleTypes: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.Interval = new Dezrez.System.EnumDataContract(jsonData.Interval);
            this.Filter = new Dezrez.Lists.BaseListFilterDataContract(jsonData.Filter);
            var roleTypesTempArray = _.map(jsonData.RoleTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.RoleTypes = <Dezrez.System.EnumDataContract[]>roleTypesTempArray;

         }
   }


   export class EventWidgetConfigDataContract extends Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract {
      StartDate: DateHelper;
      EndDate: DateHelper;
      Interval: Dezrez.System.EnumDataContract;
      Filter: Dezrez.Lists.BaseListFilterDataContract;
      RoleTypes: Array<Dezrez.System.EnumDataContract>;
      EventTypes: Array<Dezrez.System.EnumDataContract>;
      EventCategories: Array<Dezrez.System.EnumDataContract>;
      EventStatuses: Array<Dezrez.System.EnumDataContract>;
      OfferStatuses: Array<Dezrez.System.EnumDataContract>;
      DatesSetting: Enums.EventWidgetConfigDate;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var eventTypesTempArray = _.map(jsonData.EventTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.EventTypes = <Dezrez.System.EnumDataContract[]>eventTypesTempArray;

            var eventCategoriesTempArray = _.map(jsonData.EventCategories, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.EventCategories = <Dezrez.System.EnumDataContract[]>eventCategoriesTempArray;

            var eventStatusesTempArray = _.map(jsonData.EventStatuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.EventStatuses = <Dezrez.System.EnumDataContract[]>eventStatusesTempArray;

            var offerStatusesTempArray = _.map(jsonData.OfferStatuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.OfferStatuses = <Dezrez.System.EnumDataContract[]>offerStatusesTempArray;

            this.DatesSetting = <Enums.EventWidgetConfigDate>(jsonData.DatesSetting);
         }
   }


   export class GroupWidgetConfigDataContract extends Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract {
      StartDate: DateHelper;
      EndDate: DateHelper;
      Interval: Dezrez.System.EnumDataContract;
      Filter: Dezrez.Lists.BaseListFilterDataContract;
      RoleTypes: Array<Dezrez.System.EnumDataContract>;
      SearchStatuses: Array<Dezrez.System.EnumDataContract>;
      Grades: Array<Dezrez.System.EnumDataContract>;
      DatesSetting: Enums.GroupWidgetConfigDate;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var searchStatusesTempArray = _.map(jsonData.SearchStatuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.SearchStatuses = <Dezrez.System.EnumDataContract[]>searchStatusesTempArray;

            var gradesTempArray = _.map(jsonData.Grades, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Grades = <Dezrez.System.EnumDataContract[]>gradesTempArray;

            this.DatesSetting = <Enums.GroupWidgetConfigDate>(jsonData.DatesSetting);
         }
   }


   export class IntervalWidgetConfigDataContract extends Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract {
      StartDate: DateHelper;
      EndDate: DateHelper;
      Interval: Dezrez.System.EnumDataContract;
      Filter: Dezrez.Lists.BaseListFilterDataContract;
      RoleTypes: Array<Dezrez.System.EnumDataContract>;
      DateInterval: Enums.DateInterval;
      Negotiators: Array<number>;
      EventCategory: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      BranchId: number;
      IncludeDrafts: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DateInterval = <Enums.DateInterval>(jsonData.DateInterval);
            this.Negotiators = (<number[]>jsonData.Negotiators);
            this.EventCategory = new Dezrez.System.EnumDataContract(jsonData.EventCategory);
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
            this.BranchId = jsonData.BranchId;
            this.IncludeDrafts = jsonData.IncludeDrafts;
         }
   }


   export class PropertyWidgetConfigDataContract extends Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract {
      StartDate: DateHelper;
      EndDate: DateHelper;
      Interval: Dezrez.System.EnumDataContract;
      Filter: Dezrez.Lists.BaseListFilterDataContract;
      RoleTypes: Array<Dezrez.System.EnumDataContract>;
      RoleStatuses: Array<Dezrez.System.EnumDataContract>;
      MarketingFlags: any;
      DatesSetting: Enums.PropertyWidgetConfigDate;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var roleStatusesTempArray = _.map(jsonData.RoleStatuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.RoleStatuses = <Dezrez.System.EnumDataContract[]>roleStatusesTempArray;

            this.MarketingFlags = jsonData.MarketingFlags;
            this.DatesSetting = <Enums.PropertyWidgetConfigDate>(jsonData.DatesSetting);
         }
   }


   export class TodoWidgetConfigDataContract extends Dezrez.Agency.Query.Dashboard.WidgetConfigs.WidgetConfigDataContract {
      StartDate: DateHelper;
      EndDate: DateHelper;
      Interval: Dezrez.System.EnumDataContract;
      Filter: Dezrez.Lists.BaseListFilterDataContract;
      RoleTypes: Array<Dezrez.System.EnumDataContract>;
      FilterCategory: Dezrez.System.EnumDataContract;
      Negotiators: Array<number>;
      Statuses: Array<Dezrez.System.EnumDataContract>;
      ToDoTypes: Array<Dezrez.System.EnumDataContract>;
      Schedules: Array<Dezrez.System.EnumDataContract>;
      Priorities: Array<Dezrez.System.EnumDataContract>;
      Intervals: Array<Dezrez.System.EnumDataContract>;
      IncludeGlobal: boolean;
      OnlyGlobal: boolean;
      Sort: string;
      Order: string;
      OwningNegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FilterCategory = new Dezrez.System.EnumDataContract(jsonData.FilterCategory);
            this.Negotiators = (<number[]>jsonData.Negotiators);
            var statusesTempArray = _.map(jsonData.Statuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Statuses = <Dezrez.System.EnumDataContract[]>statusesTempArray;

            var toDoTypesTempArray = _.map(jsonData.ToDoTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.ToDoTypes = <Dezrez.System.EnumDataContract[]>toDoTypesTempArray;

            var schedulesTempArray = _.map(jsonData.Schedules, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Schedules = <Dezrez.System.EnumDataContract[]>schedulesTempArray;

            var prioritiesTempArray = _.map(jsonData.Priorities, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Priorities = <Dezrez.System.EnumDataContract[]>prioritiesTempArray;

            var intervalsTempArray = _.map(jsonData.Intervals, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Intervals = <Dezrez.System.EnumDataContract[]>intervalsTempArray;

            this.IncludeGlobal = jsonData.IncludeGlobal;
            this.OnlyGlobal = jsonData.OnlyGlobal;
            this.Sort = jsonData.Sort;
            this.Order = jsonData.Order;
            this.OwningNegotiatorId = jsonData.OwningNegotiatorId;
         }
   }

}

export module Dezrez.Identities.Query {

   export class IdentityDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      FriendlyName: string;
      Issuer: string;
      UniqueIdentifier: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FriendlyName = jsonData.FriendlyName;
            this.Issuer = jsonData.Issuer;
            this.UniqueIdentifier = jsonData.UniqueIdentifier;
         }
   }

}

export module Dezrez.People.Query.SearchingRoles {

   export class PersonSearchingRoleDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      GroupId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.GroupId = jsonData.GroupId;
         }
   }

}

export module Dezrez.People.Query.SellingRoles {

   export class PersonSellingRoleDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      GroupId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      PropertyId: number;
      RoleStatus: Dezrez.System.EnumDataContract;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      ExchangedPrice: Dezrez.Role.Query.Get.Marketing.ExchangedPriceDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.GroupId = jsonData.GroupId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.PropertyId = jsonData.PropertyId;
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            this.ExchangedPrice = new Dezrez.Role.Query.Get.Marketing.ExchangedPriceDataContract(jsonData.ExchangedPrice);
         }
   }

}

export module Dezrez.Branding.Query.Get {

   export class BrandingDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      BrandDocuments: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.BrandDocuments && this.BrandDocuments.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.BrandDocuments, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.BrandDocuments && this.BrandDocuments.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.BrandDocuments, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.BrandDocuments && this.BrandDocuments.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.BrandDocuments, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      PortalConfigurations: Array<Dezrez.Agency.Query.Portals.PortalConfigurationDataContract>;
      PortalCustomisations: Array<Dezrez.Agency.Query.Portals.PortalCustomisationDataContract>;
      SalesPropertyUrl: string;
      LettingsPropertyUrl: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            var brandDocumentsTempArray = _.map(jsonData.BrandDocuments, (item: any) => {
               return new Dezrez.Media.DocumentDataContract(item);
            });
            this.BrandDocuments = <Dezrez.Media.DocumentDataContract[]>brandDocumentsTempArray;

            var portalConfigurationsTempArray = _.map(jsonData.PortalConfigurations, item => { return new Dezrez.Agency.Query.Portals.PortalConfigurationDataContract(item);  });
            this.PortalConfigurations = <Dezrez.Agency.Query.Portals.PortalConfigurationDataContract[]>portalConfigurationsTempArray;

            var portalCustomisationsTempArray = _.map(jsonData.PortalCustomisations, item => { return new Dezrez.Agency.Query.Portals.PortalCustomisationDataContract(item);  });
            this.PortalCustomisations = <Dezrez.Agency.Query.Portals.PortalCustomisationDataContract[]>portalCustomisationsTempArray;

            this.SalesPropertyUrl = jsonData.SalesPropertyUrl;
            this.LettingsPropertyUrl = jsonData.LettingsPropertyUrl;
         }
   }


   export class BrandSummaryDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }

}

export module Dezrez.Branding.Query.GetCustomisationData {

   export class DocumentCustomisationDataContract {
      FileReference: string;
      Data: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.FileReference = jsonData.FileReference;
            this.Data = jsonData.Data;
         }
   }

}

export module Dezrez.Branding.Command.DefaultTemplate {

   export class BrandTemplateSaveDataContract {
      BrandId: number;
      Data: string;
      FileName: string;
      Description: string;
      Tags: Array<Dezrez.System.TagDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.BrandId = jsonData.BrandId;
            this.Data = jsonData.Data;
            this.FileName = jsonData.FileName;
            this.Description = jsonData.Description;
            var tagsTempArray = _.map(jsonData.Tags, item => { return new Dezrez.System.TagDataContract(item);  });
            this.Tags = <Dezrez.System.TagDataContract[]>tagsTempArray;

         }
   }


   export class CreateBrandTemplateDocumentResponseDataContract {
      FileReference: string;
      IsSuccessful: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.FileReference = jsonData.FileReference;
            this.IsSuccessful = jsonData.IsSuccessful;
         }
   }

}

export module Dezrez.Branding.Command.UploadBrandingCustomisation {

   export class DocumentCustomisationSaveDataContract {
      DocumentId: number;
      RoleId: number;
      Data: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.DocumentId = jsonData.DocumentId;
            this.RoleId = jsonData.RoleId;
            this.Data = jsonData.Data;
         }
   }


   export class UploadDocumentCustomisationResponseDataContract {
      FileReference: string;
      IsSuccessful: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.FileReference = jsonData.FileReference;
            this.IsSuccessful = jsonData.IsSuccessful;
         }
   }

}

export module Dezrez.Agency.Query.Fees {

   export class AgencyFeeDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      FeeCategoryType: Dezrez.System.EnumDataContract;
      FeeChargeType: Dezrez.System.EnumDataContract;
      FeeLiabilityType: Dezrez.System.EnumDataContract;
      FeeFrequency: Dezrez.System.EnumDataContract;
      ApplyTax: boolean;
      VatValue: number;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Agency.Query.Fees.AgencyScaleableFeeDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      IsDefault: boolean;
      CalculatedValue: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.FeeValueType = new Dezrez.System.EnumDataContract(jsonData.FeeValueType);
            this.FeeCategoryType = new Dezrez.System.EnumDataContract(jsonData.FeeCategoryType);
            this.FeeChargeType = new Dezrez.System.EnumDataContract(jsonData.FeeChargeType);
            this.FeeLiabilityType = new Dezrez.System.EnumDataContract(jsonData.FeeLiabilityType);
            this.FeeFrequency = new Dezrez.System.EnumDataContract(jsonData.FeeFrequency);
            this.ApplyTax = jsonData.ApplyTax;
            this.VatValue = jsonData.VatValue;
            this.DefaultValue = jsonData.DefaultValue;
            var scaleableFeesTempArray = _.map(jsonData.ScaleableFees, item => { return new Dezrez.Agency.Query.Fees.AgencyScaleableFeeDataContract(item);  });
            this.ScaleableFees = <Dezrez.Agency.Query.Fees.AgencyScaleableFeeDataContract[]>scaleableFeesTempArray;

            this.Notes = jsonData.Notes;
            this.TransactionType = new Dezrez.System.EnumDataContract(jsonData.TransactionType);
            this.IsDefault = jsonData.IsDefault;
            this.CalculatedValue = jsonData.CalculatedValue;
         }
   }


   export class AgencyScaleableFeeDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      Threshold: number;
      Value: number;
      ThresholdType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Threshold = jsonData.Threshold;
            this.Value = jsonData.Value;
            this.ThresholdType = new Dezrez.System.EnumDataContract(jsonData.ThresholdType);
         }
   }


   export class BranchFeeDataContract extends Dezrez.Agency.Query.Fees.AgencyFeeDataContract {
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      FeeCategoryType: Dezrez.System.EnumDataContract;
      FeeChargeType: Dezrez.System.EnumDataContract;
      FeeLiabilityType: Dezrez.System.EnumDataContract;
      FeeFrequency: Dezrez.System.EnumDataContract;
      ApplyTax: boolean;
      VatValue: number;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Agency.Query.Fees.AgencyScaleableFeeDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      IsDefault: boolean;
      CalculatedValue: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }

}

export module Dezrez.Agency.Query.MeetingPlaces {

   export class MeetingPlaceDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Address: Dezrez.Location.Query.AddressDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.Name = jsonData.Name;
         }
   }

}

export module Dezrez.Agency.Command.Analytics {

   export class CampaignSaveDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class GoogleAnalyticsCampaignSaveDataContract extends Dezrez.Agency.Command.Analytics.CampaignSaveDataContract {
      Name: string;
      Source: string;
      Medium: string;
      Campaign: string;
      Term: string;
      Content: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Source = jsonData.Source;
            this.Medium = jsonData.Medium;
            this.Campaign = jsonData.Campaign;
            this.Term = jsonData.Term;
            this.Content = jsonData.Content;
         }
   }

}

export module Dezrez.Agency.Command.AddBranch {

   export class AddBranchDataContract {
      AgencyId: number;
      LegacyId: number;
      Name: string;
      Email: string;
      Phone: string;
      Mobile: string;
      Website: string;
      Address: Dezrez.Location.Command.AddressSaveCommandDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.AgencyId = jsonData.AgencyId;
            this.LegacyId = jsonData.LegacyId;
            this.Name = jsonData.Name;
            this.Email = jsonData.Email;
            this.Phone = jsonData.Phone;
            this.Mobile = jsonData.Mobile;
            this.Website = jsonData.Website;
            this.Address = new Dezrez.Location.Command.AddressSaveCommandDataContract(jsonData.Address);
         }
   }


   export class EditBranchDataContract extends Dezrez.Agency.Command.AddBranch.AddBranchDataContract {
      AgencyId: number;
      LegacyId: number;
      Name: string;
      Email: string;
      Phone: string;
      Mobile: string;
      Website: string;
      Address: Dezrez.Location.Command.AddressSaveCommandDataContract;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.BranchId = jsonData.BranchId;
         }
   }

}

export module Dezrez.Agency.Command.Create {

   export class CreateAgencyDataContract {
      Name: string;
      RegionId: number;
      LegacyId: number;
      FranchiseSystemName: string;
      NodeId: number;
      SourceId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.RegionId = jsonData.RegionId;
            this.LegacyId = jsonData.LegacyId;
            this.FranchiseSystemName = jsonData.FranchiseSystemName;
            this.NodeId = jsonData.NodeId;
            this.SourceId = jsonData.SourceId;
         }
   }


   export class CreateCustomDescriptionDataContract {
      Name: string;
      Order: number;
      RoleTypeSystemName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Order = jsonData.Order;
            this.RoleTypeSystemName = jsonData.RoleTypeSystemName;
         }
   }

}

export module Dezrez.Agency.Query.Get {

   export class AgencyDataContract extends Dezrez.System.BaseCustomFieldsDataContract {
      CustomFields: Array<Dezrez.Custom.Command.SaveCustomField.CustomFieldGroupWithValuesDataContract>;
      Name: string;
      Branches: Array<Dezrez.Branch.Query.Get.BranchReferenceDataContract>;
      Licenses: number;
      About: string;
      SystemStatus: Dezrez.System.EnumDataContract;
      Source: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            var branchesTempArray = _.map(jsonData.Branches, item => { return new Dezrez.Branch.Query.Get.BranchReferenceDataContract(item);  });
            this.Branches = <Dezrez.Branch.Query.Get.BranchReferenceDataContract[]>branchesTempArray;

            this.Licenses = jsonData.Licenses;
            this.About = jsonData.About;
            this.SystemStatus = new Dezrez.System.EnumDataContract(jsonData.SystemStatus);
            this.Source = jsonData.Source;
         }
   }


   export class AgencyReferenceDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }

}

export module Dezrez.Role.Query.Images {

   export class RoleOrderedImageDataContract extends Dezrez.Media.DocumentDataContract {
      Url: string;
      RequiresAuthentication: boolean;
      ExpiryDate: DateHelper;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Order = jsonData.Order;
         }
   }

}

export module Dezrez.People.Command.AddAddress {

   export class AddPersonAddressCommandDataContract extends Dezrez.Location.Command.AddressSaveCommandDataContract {
      Latitude: number;
      Longitude: number;
      ContactOrder: number;
      AddressType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ContactOrder = jsonData.ContactOrder;
            this.AddressType = new Dezrez.System.EnumDataContract(jsonData.AddressType);
         }
   }

}

export module Dezrez.Role.Query.Get.Group {

   export class CompanyRoleDataContract extends Dezrez.Role.Query.Get.RoleDataContract {
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      ContactDetails: Dezrez.People.Query.Get.ContactDetailsDataContract;
      ExternalProviderTypes: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ContactDetails = new Dezrez.People.Query.Get.ContactDetailsDataContract(jsonData.ContactDetails);
            var externalProviderTypesTempArray = _.map(jsonData.ExternalProviderTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.ExternalProviderTypes = <Dezrez.System.EnumDataContract[]>externalProviderTypesTempArray;

         }
   }


   export class GroupRoleDataContract extends Dezrez.Role.Query.Get.RoleDataContract {
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      GroupId: number;
      FinancialStatus: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GroupId = jsonData.GroupId;
            this.FinancialStatus = new Dezrez.System.EnumDataContract(jsonData.FinancialStatus);
            this.Origin = new Dezrez.System.EnumDataContract(jsonData.Origin);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
         }
   }


   export class ProgressionRoleDataContract extends Dezrez.Role.Query.Get.RoleDataContract {
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      Contacts: Array<Dezrez.Progression.Query.ProgressionContactDataContact>;
      Milestones: Array<Dezrez.Progression.Query.ProgressionMilestoneDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var contactsTempArray = _.map(jsonData.Contacts, item => { return new Dezrez.Progression.Query.ProgressionContactDataContact(item);  });
            this.Contacts = <Dezrez.Progression.Query.ProgressionContactDataContact[]>contactsTempArray;

            var milestonesTempArray = _.map(jsonData.Milestones, item => { return new Dezrez.Progression.Query.ProgressionMilestoneDataContract(item);  });
            this.Milestones = <Dezrez.Progression.Query.ProgressionMilestoneDataContract[]>milestonesTempArray;

         }
   }


   export class PurchasingRoleDataContract extends Dezrez.Role.Query.Get.Group.ProgressionRoleDataContract {
      Contacts: Array<Dezrez.Progression.Query.ProgressionContactDataContact>;
      Milestones: Array<Dezrez.Progression.Query.ProgressionMilestoneDataContract>;
      SalesRoleId: number;
      PropertyId: number;
      AcceptedOffer: Dezrez.Events.Progression.Query.Offer.OfferDataContract;
      EstimatedExchangeDate: DateHelper;
      EstimatedCompletionDate: DateHelper;
      ActualExchangeDate: DateHelper;
      ActualCompletionDate: DateHelper;
      Commission: number;
      FinalAgreedPrice: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.SalesRoleId = jsonData.SalesRoleId;
            this.PropertyId = jsonData.PropertyId;
            this.AcceptedOffer = new Dezrez.Events.Progression.Query.Offer.OfferDataContract(jsonData.AcceptedOffer);
            this.EstimatedExchangeDate = new DateHelper(jsonData.EstimatedExchangeDate, null, true);
            this.EstimatedCompletionDate = new DateHelper(jsonData.EstimatedCompletionDate, null, true);
            this.ActualExchangeDate = new DateHelper(jsonData.ActualExchangeDate, null, true);
            this.ActualCompletionDate = new DateHelper(jsonData.ActualCompletionDate, null, true);
            this.Commission = jsonData.Commission;
            this.FinalAgreedPrice = jsonData.FinalAgreedPrice;
         }
   }


   export class GroupPropertyRoleDataContract extends Dezrez.Role.Query.Get.Group.GroupRoleDataContract {
      GroupId: number;
      FinancialStatus: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      PropertyId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyId = jsonData.PropertyId;
         }
   }


   export class GuarantorDataContract {
      Person: Dezrez.People.Query.Get.PersonDataContract;
      Tenants: Array<Dezrez.Role.Query.Get.Group.TenantInfoDataContact>;
      References: Array<Dezrez.Role.Query.Get.Group.ReferenceDataContract>;
      DeedSigned: boolean;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrderedImageDataContract: Dezrez.Role.Query.Images.RoleOrderedImageDataContract;
      get RoleOrderedImageDataContractData(): Dezrez.Role.Query.Images.RoleOrderedImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrderedImageDataContract || (this.roleOrderedImageDataContract = this.getType<Dezrez.Role.Query.Images.RoleOrderedImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrderedImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Person = new Dezrez.People.Query.Get.PersonDataContract(jsonData.Person);
            var tenantsTempArray = _.map(jsonData.Tenants, item => { return new Dezrez.Role.Query.Get.Group.TenantInfoDataContact(item);  });
            this.Tenants = <Dezrez.Role.Query.Get.Group.TenantInfoDataContact[]>tenantsTempArray;

            var referencesTempArray = _.map(jsonData.References, item => { return new Dezrez.Role.Query.Get.Group.ReferenceDataContract(item);  });
            this.References = <Dezrez.Role.Query.Get.Group.ReferenceDataContract[]>referencesTempArray;

            this.DeedSigned = jsonData.DeedSigned;
            var documentsTempArray = _.map(jsonData.Documents, (item: any) => {
               return new Dezrez.Media.DocumentDataContract(item);
            });
            this.Documents = <Dezrez.Media.DocumentDataContract[]>documentsTempArray;

         }
   }


   export class LandlordInfoDataContract {
      Person: Dezrez.People.Query.Get.PersonDataContract;
      HeadLandlord: boolean;
      RentShare: number;
      TOBSigned: boolean;
      NRLStatus: boolean;
      NRLNumber: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Person = new Dezrez.People.Query.Get.PersonDataContract(jsonData.Person);
            this.HeadLandlord = jsonData.HeadLandlord;
            this.RentShare = jsonData.RentShare;
            this.TOBSigned = jsonData.TOBSigned;
            this.NRLStatus = jsonData.NRLStatus;
            this.NRLNumber = jsonData.NRLNumber;
         }
   }


   export class ReferenceDataContract {
      Pass: boolean;
      Negotiator: Dezrez.Negotiators.Query.Get.NegotiatorDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Pass = jsonData.Pass;
            this.Negotiator = new Dezrez.Negotiators.Query.Get.NegotiatorDataContract(jsonData.Negotiator);
         }
   }


   export class TenantInfoDataContact {
      Person: Dezrez.People.Query.Get.PersonDataContract;
      HeadTenant: boolean;
      RentShare: number;
      RequiresGuarantor: boolean;
      Guarantors: Array<Dezrez.Role.Query.Get.Group.GuarantorDataContract>;
      References: Array<Dezrez.Role.Query.Get.Group.ReferenceDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Person = new Dezrez.People.Query.Get.PersonDataContract(jsonData.Person);
            this.HeadTenant = jsonData.HeadTenant;
            this.RentShare = jsonData.RentShare;
            this.RequiresGuarantor = jsonData.RequiresGuarantor;
            var guarantorsTempArray = _.map(jsonData.Guarantors, item => { return new Dezrez.Role.Query.Get.Group.GuarantorDataContract(item);  });
            this.Guarantors = <Dezrez.Role.Query.Get.Group.GuarantorDataContract[]>guarantorsTempArray;

            var referencesTempArray = _.map(jsonData.References, item => { return new Dezrez.Role.Query.Get.Group.ReferenceDataContract(item);  });
            this.References = <Dezrez.Role.Query.Get.Group.ReferenceDataContract[]>referencesTempArray;

         }
   }


   export class InterestRoleDataContract extends Dezrez.Role.Query.Get.Group.GroupRoleDataContract {
      GroupId: number;
      FinancialStatus: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var flagsTempArray = _.map(jsonData.Flags, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Flags = <Dezrez.System.EnumDataContract[]>flagsTempArray;

         }
   }


   export class TenantRoleDataContract extends Dezrez.Role.Query.Get.Group.GroupPropertyRoleDataContract {
      PropertyId: number;
      AcceptedOffer: Dezrez.Events.Progression.Query.Offer.LettingOfferDataContract;
      Deposit: Dezrez.Role.Query.Get.Marketing.DepositDataContract;
      Term: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      EstimatedStartDate: DateHelper;
      StartDate: DateHelper;
      EndDate: DateHelper;
      Commission: number;
      TenantInfo: Array<Dezrez.Role.Query.Get.Group.TenantInfoDataContact>;
      Guarantors: Array<Dezrez.Role.Query.Get.Group.GuarantorDataContract>;
      TenantBaseDeposit: Dezrez.Role.Query.Get.Group.Charges.TenantDepositDataContract;
      TenantAdditionalDeposits: Array<Dezrez.Role.Query.Get.Group.Charges.TenantDepositDataContract>;
      TenantFees: Array<Dezrez.Role.Query.Get.Group.Charges.TenantFeeDataContract>;
      Payments: Array<Dezrez.Finances.PaymentDataContract>;
      Milestones: Array<Dezrez.Progression.Query.ProgressionMilestoneDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AcceptedOffer = new Dezrez.Events.Progression.Query.Offer.LettingOfferDataContract(jsonData.AcceptedOffer);
            this.Deposit = new Dezrez.Role.Query.Get.Marketing.DepositDataContract(jsonData.Deposit);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.EstimatedStartDate = new DateHelper(jsonData.EstimatedStartDate, null, true);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.Commission = jsonData.Commission;
            var tenantInfoTempArray = _.map(jsonData.TenantInfo, item => { return new Dezrez.Role.Query.Get.Group.TenantInfoDataContact(item);  });
            this.TenantInfo = <Dezrez.Role.Query.Get.Group.TenantInfoDataContact[]>tenantInfoTempArray;

            var guarantorsTempArray = _.map(jsonData.Guarantors, item => { return new Dezrez.Role.Query.Get.Group.GuarantorDataContract(item);  });
            this.Guarantors = <Dezrez.Role.Query.Get.Group.GuarantorDataContract[]>guarantorsTempArray;

            this.TenantBaseDeposit = new Dezrez.Role.Query.Get.Group.Charges.TenantDepositDataContract(jsonData.TenantBaseDeposit);
            var tenantAdditionalDepositsTempArray = _.map(jsonData.TenantAdditionalDeposits, item => { return new Dezrez.Role.Query.Get.Group.Charges.TenantDepositDataContract(item);  });
            this.TenantAdditionalDeposits = <Dezrez.Role.Query.Get.Group.Charges.TenantDepositDataContract[]>tenantAdditionalDepositsTempArray;

            var tenantFeesTempArray = _.map(jsonData.TenantFees, item => { return new Dezrez.Role.Query.Get.Group.Charges.TenantFeeDataContract(item);  });
            this.TenantFees = <Dezrez.Role.Query.Get.Group.Charges.TenantFeeDataContract[]>tenantFeesTempArray;

            var paymentsTempArray = _.map(jsonData.Payments, item => { return new Dezrez.Finances.PaymentDataContract(item);  });
            this.Payments = <Dezrez.Finances.PaymentDataContract[]>paymentsTempArray;

            var milestonesTempArray = _.map(jsonData.Milestones, item => { return new Dezrez.Progression.Query.ProgressionMilestoneDataContract(item);  });
            this.Milestones = <Dezrez.Progression.Query.ProgressionMilestoneDataContract[]>milestonesTempArray;

         }
   }

}

export module Dezrez.Role.Query.Get.Group.Charges {

   export class FeeDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Role.Query.Get.Group.Charges.ScaleableFeeDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.FeeValueType = new Dezrez.System.EnumDataContract(jsonData.FeeValueType);
            this.DefaultValue = jsonData.DefaultValue;
            var scaleableFeesTempArray = _.map(jsonData.ScaleableFees, item => { return new Dezrez.Role.Query.Get.Group.Charges.ScaleableFeeDataContract(item);  });
            this.ScaleableFees = <Dezrez.Role.Query.Get.Group.Charges.ScaleableFeeDataContract[]>scaleableFeesTempArray;

            this.Notes = jsonData.Notes;
            this.TransactionType = new Dezrez.System.EnumDataContract(jsonData.TransactionType);
         }
   }


   export class ScaleableFeeDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      Threshold: number;
      Value: number;
      ThresholdType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Threshold = jsonData.Threshold;
            this.Value = jsonData.Value;
            this.ThresholdType = new Dezrez.System.EnumDataContract(jsonData.ThresholdType);
         }
   }


   export class TenantChargeInfoDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Paid: boolean;
      DiscountPercentage: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Paid = jsonData.Paid;
            this.DiscountPercentage = jsonData.DiscountPercentage;
         }
   }


   export class TenantDepositDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Deposit: Dezrez.Role.Query.Get.Marketing.DepositDataContract;
      TenantChargeInfo: Dezrez.Role.Query.Get.Group.Charges.TenantChargeInfoDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Deposit = new Dezrez.Role.Query.Get.Marketing.DepositDataContract(jsonData.Deposit);
            this.TenantChargeInfo = new Dezrez.Role.Query.Get.Group.Charges.TenantChargeInfoDataContract(jsonData.TenantChargeInfo);
         }
   }


   export class TenantFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Fee: Dezrez.Role.Query.Get.Group.Charges.FeeDataContract;
      TenantChargeInfo: Dezrez.Role.Query.Get.Group.Charges.TenantChargeInfoDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Fee = new Dezrez.Role.Query.Get.Group.Charges.FeeDataContract(jsonData.Fee);
            this.TenantChargeInfo = new Dezrez.Role.Query.Get.Group.Charges.TenantChargeInfoDataContract(jsonData.TenantChargeInfo);
         }
   }

}

export module Dezrez.Group.Command.SendEmail {

   export class EmailAttachmentDataContract {
      AttachmentName: string;
      ContentType: string;
      FileExtension: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.AttachmentName = jsonData.AttachmentName;
            this.ContentType = jsonData.ContentType;
            this.FileExtension = jsonData.FileExtension;
         }
   }


   export class DocumentEmailAttachmentDataContract extends Dezrez.Group.Command.SendEmail.EmailAttachmentDataContract {
      AttachmentName: string;
      ContentType: string;
      FileExtension: string;
      DocumentId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DocumentId = jsonData.DocumentId;
         }
   }


   export class SendGroupEmailBodyDataContract {
      Html: string;
      PlainText: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Html = jsonData.Html;
            this.PlainText = jsonData.PlainText;
         }
   }


   export class SendGroupEmailDataContract {
      IsDraft: boolean;
      FromAddress: string;
      FromName: string;
      ToContactItemIds: Array<number>;
      CCContactItemIds: Array<number>;
      BCCContactItemIds: Array<number>;
      Body: Dezrez.Group.Command.SendEmail.SendGroupEmailBodyDataContract;
      Subject: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      AttachmentIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.IsDraft = jsonData.IsDraft;
            this.FromAddress = jsonData.FromAddress;
            this.FromName = jsonData.FromName;
            this.ToContactItemIds = (<number[]>jsonData.ToContactItemIds);
            this.CCContactItemIds = (<number[]>jsonData.CCContactItemIds);
            this.BCCContactItemIds = (<number[]>jsonData.BCCContactItemIds);
            this.Body = new Dezrez.Group.Command.SendEmail.SendGroupEmailBodyDataContract(jsonData.Body);
            this.Subject = jsonData.Subject;
            this.PreferredProviderId = jsonData.PreferredProviderId;
            this.BrandId = jsonData.BrandId;
            this.FranchiseId = jsonData.FranchiseId;
            this.AttachmentIds = (<number[]>jsonData.AttachmentIds);
         }
   }


   export class EmailBodyWithAttachmentsDataContract extends Dezrez.Group.Command.SendEmail.SendGroupEmailBodyDataContract {
      Html: string;
      PlainText: string;
      Attachments: Array<Dezrez.Group.Command.SendEmail.EmailAttachmentDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var attachmentsTempArray = _.map(jsonData.Attachments, item => { return new Dezrez.Group.Command.SendEmail.EmailAttachmentDataContract(item);  });
            this.Attachments = <Dezrez.Group.Command.SendEmail.EmailAttachmentDataContract[]>attachmentsTempArray;

         }
   }


   export class SendPropertyEmailDataContract extends Dezrez.Group.Command.SendEmail.SendGroupEmailDataContract {
      IsDraft: boolean;
      FromAddress: string;
      FromName: string;
      ToContactItemIds: Array<number>;
      CCContactItemIds: Array<number>;
      BCCContactItemIds: Array<number>;
      Body: Dezrez.Group.Command.SendEmail.SendGroupEmailBodyDataContract;
      Subject: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      AttachmentIds: Array<number>;
      propertyMarketingRoleIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.propertyMarketingRoleIds = (<number[]>jsonData.propertyMarketingRoleIds);
         }
   }


   export class SystemDocumentEmailAttachmentDataContract extends Dezrez.Group.Command.SendEmail.EmailAttachmentDataContract {
      AttachmentName: string;
      ContentType: string;
      FileExtension: string;
      FileReference: string;
      SystemPartition: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FileReference = jsonData.FileReference;
            this.SystemPartition = jsonData.SystemPartition;
         }
   }


   export class SendGeneratedGroupEmailDataContract extends Dezrez.Group.Command.SendEmail.SendGroupEmailDataContract {
      IsDraft: boolean;
      FromAddress: string;
      FromName: string;
      ToContactItemIds: Array<number>;
      CCContactItemIds: Array<number>;
      BCCContactItemIds: Array<number>;
      Body: Dezrez.Group.Command.SendEmail.SendGroupEmailBodyDataContract;
      Subject: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      AttachmentIds: Array<number>;
      EnvelopeTemplatePackType: Dezrez.System.EnumDataContract;
      OriginatingEventId: number;
      SackReference: string;
      EnvelopeReference: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EnvelopeTemplatePackType = new Dezrez.System.EnumDataContract(jsonData.EnvelopeTemplatePackType);
            this.OriginatingEventId = jsonData.OriginatingEventId;
            this.SackReference = jsonData.SackReference;
            this.EnvelopeReference = jsonData.EnvelopeReference;
         }
   }


   export class SendHandTypedGroupEmailDataContract extends Dezrez.Group.Command.SendEmail.SendGroupEmailDataContract {
      IsDraft: boolean;
      FromAddress: string;
      FromName: string;
      ToContactItemIds: Array<number>;
      CCContactItemIds: Array<number>;
      BCCContactItemIds: Array<number>;
      Body: Dezrez.Group.Command.SendEmail.SendGroupEmailBodyDataContract;
      Subject: string;
      PreferredProviderId: number;
      BrandId: number;
      FranchiseId: number;
      AttachmentIds: Array<number>;
      GroupId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GroupId = jsonData.GroupId;
         }
   }

}

export module Dezrez.Group.Query.DisplaySettings {

   export class GroupDisplaySettingsDataContract {
      Name: string;
      Description: string;
      GroupIcon: Dezrez.System.EnumDataContract;
      ImageReference: string;
      GroupType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.ImageReference = jsonData.ImageReference;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
         }
   }

}

export module Dezrez.Job.Command.CancelJob {

   export class CancelJobCommandDataContract {
      JobReference: any;
      CancellationReason: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.JobReference = jsonData.JobReference;
            this.CancellationReason = jsonData.CancellationReason;
         }
   }

}

export module Dezrez.Job.Command.SendSystemEmail {

   export class SendSystemEmailCommandDataContract {
      To: Array<string>;
      From: string;
      Subject: string;
      Body: string;
      SystemDocumentBody: string;
      JsonModel: string;
      SystemDocumentAttachments: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.To = (<string[]>jsonData.To);
            this.From = jsonData.From;
            this.Subject = jsonData.Subject;
            this.Body = jsonData.Body;
            this.SystemDocumentBody = jsonData.SystemDocumentBody;
            this.JsonModel = jsonData.JsonModel;
            this.SystemDocumentAttachments = (<string[]>jsonData.SystemDocumentAttachments);
         }
   }

}

export module Dezrez.Job.Command.NormalisePhoneNumbers {

   export class NormalisePhoneNumbersCommandDataContract {
      PageSize: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PageSize = jsonData.PageSize;
         }
   }

}

export module Dezrez.Job.Query.Get {

   export class JobInvocationDetailsDataContract {
      SupportsCancellation: boolean;
      ReportsProgress: boolean;
      InitialStatusText: string;
      JobReference: any;
      Success: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SupportsCancellation = jsonData.SupportsCancellation;
            this.ReportsProgress = jsonData.ReportsProgress;
            this.InitialStatusText = jsonData.InitialStatusText;
            this.JobReference = jsonData.JobReference;
            this.Success = jsonData.Success;
         }
   }


   export class PollJobStatusDataContract {
      JobReference: any;
      JobStatus: string;
      JobStatusId: number;
      JobPercentageCompleted: number;
      JobStatusText: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.JobReference = jsonData.JobReference;
            this.JobStatus = jsonData.JobStatus;
            this.JobStatusId = jsonData.JobStatusId;
            this.JobPercentageCompleted = jsonData.JobPercentageCompleted;
            this.JobStatusText = jsonData.JobStatusText;
         }
   }

}

export module Dezrez.Location.Command.UpdatePoint {

   export class UpdatePointCommandDataContract {
      Latitude: number;
      Longitude: number;
      Altitude: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.Altitude = jsonData.Altitude;
         }
   }

}

export module Dezrez.Negotiators.Query.Keys {

   export class NegotiatorKeyDataContract {
      Name: string;
      Id: number;
      Code: string;
      PropertyId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Id = jsonData.Id;
            this.Code = jsonData.Code;
            this.PropertyId = jsonData.PropertyId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
         }
   }

}

export module Dezrez.People.Command.AddContactItem {

   export class ContactItemSaveCommandDataContract {
      Id: number;
      Type: Dezrez.System.EnumDataContract;
      Value: string;
      Notes: string;
      ContactOrder: number;
      AllowContact: boolean;
      NormalisedRegionCode: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Value = jsonData.Value;
            this.Notes = jsonData.Notes;
            this.ContactOrder = jsonData.ContactOrder;
            this.AllowContact = jsonData.AllowContact;
            this.NormalisedRegionCode = jsonData.NormalisedRegionCode;
         }
   }

}

export module Dezrez.People.Command.UpdateDetails {

   export class UpdateDetailsCommandDataContract {
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
         }
   }

}

export module Dezrez.People.Command.SearchContacts {

   export class CTISearchCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PhoneNumber: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PhoneNumber = jsonData.PhoneNumber;
         }
   }

}

export module Dezrez.Property.Command.BookValuation.Descriptions {

   export class BookValuationDescriptionCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class BookValuationAmenityDescriptionCommandDataContract extends Dezrez.Property.Command.BookValuation.Descriptions.BookValuationDescriptionCommandDataContract {
      Name: string;
      Gardens: number;
      ParkingSpaces: number;
      Garages: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gardens = jsonData.Gardens;
            this.ParkingSpaces = jsonData.ParkingSpaces;
            this.Garages = jsonData.Garages;
         }
   }


   export class BookValuationRoomCountDescriptionCommandDataContract extends Dezrez.Property.Command.BookValuation.Descriptions.BookValuationDescriptionCommandDataContract {
      Name: string;
      Bedrooms: number;
      Bathrooms: number;
      Receptions: number;
      Others: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Bedrooms = jsonData.Bedrooms;
            this.Bathrooms = jsonData.Bathrooms;
            this.Receptions = jsonData.Receptions;
            this.Others = jsonData.Others;
         }
   }


   export class BookValuationStyleAgeDescriptionCommandDataContract extends Dezrez.Property.Command.BookValuation.Descriptions.BookValuationDescriptionCommandDataContract {
      Name: string;
      PropertyType: Dezrez.System.EnumDataContract;
      StyleType: Dezrez.System.EnumDataContract;
      LeaseType: Dezrez.System.EnumDataContract;
      AgeType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyType = new Dezrez.System.EnumDataContract(jsonData.PropertyType);
            this.StyleType = new Dezrez.System.EnumDataContract(jsonData.StyleType);
            this.LeaseType = new Dezrez.System.EnumDataContract(jsonData.LeaseType);
            this.AgeType = new Dezrez.System.EnumDataContract(jsonData.AgeType);
         }
   }

}

export module Dezrez.Property.Query.Comparables {

   export class ComparablePropertyDataContract {
      PropertyId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      Bedrooms: number;
      MilesFromTargetProperty: number;
      DateValued: DateHelper;
      MostRecentValuedPrice: number;
      MostRecentSoldPrice: number;
      DateSold: DateHelper;
      DateValuedForLet: DateHelper;
      MostRecentValuedPriceForLet: number;
      MostRecentValuedPriceTypeForLet: Dezrez.System.EnumDataContract;
      MostRecentLetPrice: number;
      MostRecentLetPriceType: Dezrez.System.EnumDataContract;
      DateLet: DateHelper;
      LetTermType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyId = jsonData.PropertyId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
            this.Bedrooms = jsonData.Bedrooms;
            this.MilesFromTargetProperty = jsonData.MilesFromTargetProperty;
            this.DateValued = new DateHelper(jsonData.DateValued, null, true);
            this.MostRecentValuedPrice = jsonData.MostRecentValuedPrice;
            this.MostRecentSoldPrice = jsonData.MostRecentSoldPrice;
            this.DateSold = new DateHelper(jsonData.DateSold, null, true);
            this.DateValuedForLet = new DateHelper(jsonData.DateValuedForLet, null, true);
            this.MostRecentValuedPriceForLet = jsonData.MostRecentValuedPriceForLet;
            this.MostRecentValuedPriceTypeForLet = new Dezrez.System.EnumDataContract(jsonData.MostRecentValuedPriceTypeForLet);
            this.MostRecentLetPrice = jsonData.MostRecentLetPrice;
            this.MostRecentLetPriceType = new Dezrez.System.EnumDataContract(jsonData.MostRecentLetPriceType);
            this.DateLet = new DateHelper(jsonData.DateLet, null, true);
            this.LetTermType = new Dezrez.System.EnumDataContract(jsonData.LetTermType);
         }
   }

}

export module Dezrez.Property.Query.Suggest {

   export class PropertySuggestResultDataContract {
      PropertyId: number;
      Address: Dezrez.Location.Query.AddressDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PropertyId = jsonData.PropertyId;
            this.Address = new Dezrez.Location.Query.AddressDataContract(jsonData.Address);
         }
   }


   export class PropertySuggestDataContract {
      Query: string;
      PageSize: number;
      PageNumber: number;
      SuggestType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Query = jsonData.Query;
            this.PageSize = jsonData.PageSize;
            this.PageNumber = jsonData.PageNumber;
            this.SuggestType = jsonData.SuggestType;
         }
   }

}

export module Dezrez.Property.Query.Keys {

   export class KeyNegotiatorDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Gender: Dezrez.System.EnumDataContract;
      Title: string;
      FirstName: string;
      LastName: string;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      JobTitle: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.JobTitle = jsonData.JobTitle;
         }
   }


   export class KeyRecipientDetailsDataContract {
      RecipientId: number;
      RecipientName: string;
      RecipientGroupName: string;
      RecipientType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RecipientId = jsonData.RecipientId;
            this.RecipientName = jsonData.RecipientName;
            this.RecipientGroupName = jsonData.RecipientGroupName;
            this.RecipientType = new Dezrez.System.EnumDataContract(jsonData.RecipientType);
         }
   }

}

export module Dezrez.Role.Command.SetMarketingFlag {

   export class SetMarketingFlagCommandDataContract {
      MarketingFlag: Dezrez.System.EnumDataContract;
      Enabled: boolean;
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MarketingFlag = new Dezrez.System.EnumDataContract(jsonData.MarketingFlag);
            this.Enabled = jsonData.Enabled;
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }

}

export module Dezrez.Role.Command.SetRoleImageOrder {

   export class DocumentOrderDataContract {
      DocumentId: number;
      Order: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.DocumentId = jsonData.DocumentId;
            this.Order = jsonData.Order;
         }
   }


   export class SetRoleDocumentOrderCommandDataContract {
      DocumentOrder: Array<Dezrez.Role.Command.SetRoleImageOrder.DocumentOrderDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var documentOrderTempArray = _.map(jsonData.DocumentOrder, item => { return new Dezrez.Role.Command.SetRoleImageOrder.DocumentOrderDataContract(item);  });
            this.DocumentOrder = <Dezrez.Role.Command.SetRoleImageOrder.DocumentOrderDataContract[]>documentOrderTempArray;

         }
   }

}

export module Dezrez.Role.Command.UpdateFee {

   export class UpdateFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      FeeCategoryType: Dezrez.System.EnumDataContract;
      FeeChargeType: Dezrez.System.EnumDataContract;
      FeeLiabilityType: Dezrez.System.EnumDataContract;
      FeeFrequency: Dezrez.System.EnumDataContract;
      ApplyTax: boolean;
      VatValue: number;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Role.Command.UpdateFee.UpdateFeeScaleableFeeDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      AgencyType: Dezrez.System.EnumDataContract;
      IsDefault: boolean;
      PersistAsBranchFee: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.FeeValueType = new Dezrez.System.EnumDataContract(jsonData.FeeValueType);
            this.FeeCategoryType = new Dezrez.System.EnumDataContract(jsonData.FeeCategoryType);
            this.FeeChargeType = new Dezrez.System.EnumDataContract(jsonData.FeeChargeType);
            this.FeeLiabilityType = new Dezrez.System.EnumDataContract(jsonData.FeeLiabilityType);
            this.FeeFrequency = new Dezrez.System.EnumDataContract(jsonData.FeeFrequency);
            this.ApplyTax = jsonData.ApplyTax;
            this.VatValue = jsonData.VatValue;
            this.DefaultValue = jsonData.DefaultValue;
            var scaleableFeesTempArray = _.map(jsonData.ScaleableFees, item => { return new Dezrez.Role.Command.UpdateFee.UpdateFeeScaleableFeeDataContract(item);  });
            this.ScaleableFees = <Dezrez.Role.Command.UpdateFee.UpdateFeeScaleableFeeDataContract[]>scaleableFeesTempArray;

            this.Notes = jsonData.Notes;
            this.TransactionType = new Dezrez.System.EnumDataContract(jsonData.TransactionType);
            this.AgencyType = new Dezrez.System.EnumDataContract(jsonData.AgencyType);
            this.IsDefault = jsonData.IsDefault;
            this.PersistAsBranchFee = jsonData.PersistAsBranchFee;
         }
   }


   export class UpdateFeeResponseDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      FeeValueType: Dezrez.System.EnumDataContract;
      DefaultValue: number;
      ScaleableFees: Array<Dezrez.Role.Command.UpdateFee.UpdateFeeScaleableFeeResponseDataContract>;
      Notes: string;
      TransactionType: Dezrez.System.EnumDataContract;
      IsDefault: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.FeeValueType = new Dezrez.System.EnumDataContract(jsonData.FeeValueType);
            this.DefaultValue = jsonData.DefaultValue;
            var scaleableFeesTempArray = _.map(jsonData.ScaleableFees, item => { return new Dezrez.Role.Command.UpdateFee.UpdateFeeScaleableFeeResponseDataContract(item);  });
            this.ScaleableFees = <Dezrez.Role.Command.UpdateFee.UpdateFeeScaleableFeeResponseDataContract[]>scaleableFeesTempArray;

            this.Notes = jsonData.Notes;
            this.TransactionType = new Dezrez.System.EnumDataContract(jsonData.TransactionType);
            this.IsDefault = jsonData.IsDefault;
         }
   }


   export class UpdateFeeScaleableFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Threshold: number;
      Value: number;
      ThresholdType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Threshold = jsonData.Threshold;
            this.Value = jsonData.Value;
            this.ThresholdType = new Dezrez.System.EnumDataContract(jsonData.ThresholdType);
         }
   }


   export class UpdateFeeScaleableFeeResponseDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      Name: string;
      Threshold: number;
      Value: number;
      ThresholdType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Threshold = jsonData.Threshold;
            this.Value = jsonData.Value;
            this.ThresholdType = new Dezrez.System.EnumDataContract(jsonData.ThresholdType);
         }
   }

}

export module Dezrez.Role.Command.UpdatePrice {

   export class UpdateOwningTeamResponseDataContract {
      OldOwningTeamId: number;
      NewOwningTeamId: number;
      IsSuccessful: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.OldOwningTeamId = jsonData.OldOwningTeamId;
            this.NewOwningTeamId = jsonData.NewOwningTeamId;
            this.IsSuccessful = jsonData.IsSuccessful;
         }
   }


   export class UpdatePropertyPriceResponseDataContract {
      PriceChangeEventId: number;
      NewPrice: number;
      OldPrice: number;
      NewPriceType: Dezrez.System.EnumDataContract;
      OldPriceType: Dezrez.System.EnumDataContract;
      IsSuccessful: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PriceChangeEventId = jsonData.PriceChangeEventId;
            this.NewPrice = jsonData.NewPrice;
            this.OldPrice = jsonData.OldPrice;
            this.NewPriceType = new Dezrez.System.EnumDataContract(jsonData.NewPriceType);
            this.OldPriceType = new Dezrez.System.EnumDataContract(jsonData.OldPriceType);
            this.IsSuccessful = jsonData.IsSuccessful;
         }
   }


   export class UpdatePriceDataContract {
      AskingPrice: number;
      PriceType: Dezrez.System.EnumDataContract;
      PriceText: string;
      PriceQualifierType: Dezrez.System.EnumDataContract;
      MarkAsReduced: boolean;
      PriceOnApplication: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.AskingPrice = jsonData.AskingPrice;
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.PriceText = jsonData.PriceText;
            this.PriceQualifierType = new Dezrez.System.EnumDataContract(jsonData.PriceQualifierType);
            this.MarkAsReduced = jsonData.MarkAsReduced;
            this.PriceOnApplication = jsonData.PriceOnApplication;
         }
   }

}

export module Dezrez.Role.Command.EPC {

   export class EPCCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      EPCType: Dezrez.System.EnumDataContract;
      EERCurrent: number;
      EERPotential: number;
      EIRCurrent: number;
      EIRPotential: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EPCType = new Dezrez.System.EnumDataContract(jsonData.EPCType);
            this.EERCurrent = jsonData.EERCurrent;
            this.EERPotential = jsonData.EERPotential;
            this.EIRCurrent = jsonData.EIRCurrent;
            this.EIRPotential = jsonData.EIRPotential;
         }
   }

}

export module Dezrez.Role.Command.SetDeposit {

   export class SetDepositCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      PriceValue: number;
      CurrencyCode: string;
      Scheme: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PriceValue = jsonData.PriceValue;
            this.CurrencyCode = jsonData.CurrencyCode;
            this.Scheme = new Dezrez.System.EnumDataContract(jsonData.Scheme);
         }
   }

}

export module Dezrez.Role.Command.SetInfo {

   export class SetInfoCommandDataContract {
      ServiceLevel: Dezrez.System.EnumDataContract;
      Term: Dezrez.System.EnumDataContract;
      PriceType: Dezrez.System.EnumDataContract;
      AvailableDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ServiceLevel = new Dezrez.System.EnumDataContract(jsonData.ServiceLevel);
            this.Term = new Dezrez.System.EnumDataContract(jsonData.Term);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.AvailableDate = new DateHelper(jsonData.AvailableDate, null, true);
         }
   }

}

export module Dezrez.Role.Command.VAT {

   export class VatRateDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      VatRateType: Dezrez.System.EnumDataContract;
      VatRatePercentage: number;
      ValidFrom: DateHelper;
      ValidTo: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.VatRateType = new Dezrez.System.EnumDataContract(jsonData.VatRateType);
            this.VatRatePercentage = jsonData.VatRatePercentage;
            this.ValidFrom = new DateHelper(jsonData.ValidFrom, null, true);
            this.ValidTo = new DateHelper(jsonData.ValidTo, null, true);
         }
   }

}

export module Dezrez.Role.Command.AddLandlordInfo {

   export class AddLandlordInfoDataContract {
      GroupPerson: Dezrez.Group.Command.AddGroup.AddGroupMemberCommandDataContract;
      HeadLandlord: boolean;
      RentShare: number;
      TOBSigned: boolean;
      NRLStatus: boolean;
      NRLNumber: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupPerson = new Dezrez.Group.Command.AddGroup.AddGroupMemberCommandDataContract(jsonData.GroupPerson);
            this.HeadLandlord = jsonData.HeadLandlord;
            this.RentShare = jsonData.RentShare;
            this.TOBSigned = jsonData.TOBSigned;
            this.NRLStatus = jsonData.NRLStatus;
            this.NRLNumber = jsonData.NRLNumber;
         }
   }

}

export module Dezrez.Role.Command.UpdateLandlordInfo {

   export class SetNRLDetailsCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      NRLStatus: boolean;
      NRLNumber: string;
      IBAN: string;
      SWIFT: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NRLStatus = jsonData.NRLStatus;
            this.NRLNumber = jsonData.NRLNumber;
            this.IBAN = jsonData.IBAN;
            this.SWIFT = jsonData.SWIFT;
         }
   }


   export class SetRentShareCommandDataContract {
      PersonId: number;
      RentShare: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PersonId = jsonData.PersonId;
            this.RentShare = jsonData.RentShare;
         }
   }


   export class SetTOBSignedCommandDataContract {
      PersonId: number;
      TOBSigned: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PersonId = jsonData.PersonId;
            this.TOBSigned = jsonData.TOBSigned;
         }
   }

}

export module Dezrez.Role.Command.SaveUtility {

   export class SaveUtilityDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      UtilityType: Dezrez.System.EnumDataContract;
      SupplierGroupId: number;
      MeterReading: string;
      ReadingDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.UtilityType = new Dezrez.System.EnumDataContract(jsonData.UtilityType);
            this.SupplierGroupId = jsonData.SupplierGroupId;
            this.MeterReading = jsonData.MeterReading;
            this.ReadingDate = new DateHelper(jsonData.ReadingDate, null, true);
         }
   }

}

export module Dezrez.Role.Command.AddTenantCharge {

   export class AddTenantChargeInfoDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Paid: boolean;
      DiscountPercentage: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Paid = jsonData.Paid;
            this.DiscountPercentage = jsonData.DiscountPercentage;
         }
   }


   export class AddTenantDepositDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Deposit: Dezrez.Role.Command.SetDeposit.SetDepositCommandDataContract;
      TenantChargeInfo: Dezrez.Role.Command.AddTenantCharge.AddTenantChargeInfoDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Deposit = new Dezrez.Role.Command.SetDeposit.SetDepositCommandDataContract(jsonData.Deposit);
            this.TenantChargeInfo = new Dezrez.Role.Command.AddTenantCharge.AddTenantChargeInfoDataContract(jsonData.TenantChargeInfo);
         }
   }


   export class AddTenantFeeDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Fee: Dezrez.Role.Command.UpdateFee.UpdateFeeDataContract;
      TenantChargeInfo: Dezrez.Role.Command.AddTenantCharge.AddTenantChargeInfoDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Fee = new Dezrez.Role.Command.UpdateFee.UpdateFeeDataContract(jsonData.Fee);
            this.TenantChargeInfo = new Dezrez.Role.Command.AddTenantCharge.AddTenantChargeInfoDataContract(jsonData.TenantChargeInfo);
         }
   }


   export class AddTenantPaymentDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Payment: Dezrez.Finances.AddPaymentDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Payment = new Dezrez.Finances.AddPaymentDataContract(jsonData.Payment);
         }
   }

}

export module Dezrez.Role.Command.UpdateTenantChargeInfo {

   export class UpdateTenantChargeInfoDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Paid: boolean;
      DiscountPercentage: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Id = jsonData.Id;
            this.Paid = jsonData.Paid;
            this.DiscountPercentage = jsonData.DiscountPercentage;
         }
   }

}

export module Dezrez.Role.Command.SetComplianceChecks {

   export class SetComplianceChecksCommandDataContract {
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ValidEpcInPlace = jsonData.ValidEpcInPlace;
            this.ProofOfIdReceived = jsonData.ProofOfIdReceived;
            this.ProofOfOwnershipReceived = jsonData.ProofOfOwnershipReceived;
         }
   }

}

export module Dezrez.Role.Command.Progression {

   export class AddChainItemCommandDataContract {
      RelatedChainItemId: number;
      Notes: string;
      Reference: string;
      ChainDirection: Enums.ChainItemDirection;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.RelatedChainItemId = jsonData.RelatedChainItemId;
            this.Notes = jsonData.Notes;
            this.Reference = jsonData.Reference;
            this.ChainDirection = <Enums.ChainItemDirection>(jsonData.ChainDirection);
         }
   }


   export class AddGroupChainItemCommandDataContract extends Dezrez.Role.Command.Progression.AddChainItemCommandDataContract {
      RelatedChainItemId: number;
      Notes: string;
      Reference: string;
      ChainDirection: Enums.ChainItemDirection;
      GroupId: number;
      ProgressionContactId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GroupId = jsonData.GroupId;
            this.ProgressionContactId = jsonData.ProgressionContactId;
         }
   }


   export class AddRoleChainItemCommandDataContract extends Dezrez.Role.Command.Progression.AddChainItemCommandDataContract {
      RelatedChainItemId: number;
      Notes: string;
      Reference: string;
      ChainDirection: Enums.ChainItemDirection;
      RoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.RoleId = jsonData.RoleId;
         }
   }


   export class MergeChainCommandDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
         }
   }


   export class SplitChainCommandDataContract {
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
         }
   }


   export class UpdateChainItemCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Notes: string;
      Reference: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Notes = jsonData.Notes;
            this.Reference = jsonData.Reference;
         }
   }

}

export module Dezrez.Role.Command.Portals {

   export class SetPortalConfigDelaysDataContract {
      PortalConfigurationId: number;
      ExclusiveHours: number;
      Enabled: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.PortalConfigurationId = jsonData.PortalConfigurationId;
            this.ExclusiveHours = jsonData.ExclusiveHours;
            this.Enabled = jsonData.Enabled;
         }
   }

}

export module Dezrez.Role.Command.UpdateBoardRequest {

   export class UpdateBoardRequestDataContract {
      GroupId: number;
      BoardStatus: Dezrez.System.EnumDataContract;
      BoardSlipType: Dezrez.System.EnumDataContract;
      BoardEventStatus: Dezrez.System.EnumDataContract;
      AdditionalInfo: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.BoardStatus = new Dezrez.System.EnumDataContract(jsonData.BoardStatus);
            this.BoardSlipType = new Dezrez.System.EnumDataContract(jsonData.BoardSlipType);
            this.BoardEventStatus = new Dezrez.System.EnumDataContract(jsonData.BoardEventStatus);
            this.AdditionalInfo = jsonData.AdditionalInfo;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }

}

export module Dezrez.Role.Command.SetReserve {

   export class SetReserveDataContract {
      Reserve: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Reserve = jsonData.Reserve;
         }
   }

}

export module Dezrez.Role.Command.RemoveFromAuction {

   export class RemoveFromAuctionDataContract {
      AuctionId: number;
      Status: Dezrez.System.EnumDataContract;
      ConvertToSalesRole: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.AuctionId = jsonData.AuctionId;
            this.Status = new Dezrez.System.EnumDataContract(jsonData.Status);
            this.ConvertToSalesRole = jsonData.ConvertToSalesRole;
         }
   }

}

export module Dezrez.Role.Query.Get.Progression {

   export class ChainDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ChainItems: Array<Dezrez.Role.Query.Get.Progression.ChainItemDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var chainItemsTempArray = _.map(jsonData.ChainItems, item => { return new Dezrez.Role.Query.Get.Progression.ChainItemDataContract(item);  });
            this.ChainItems = <Dezrez.Role.Query.Get.Progression.ChainItemDataContract[]>chainItemsTempArray;

         }
   }


   export class ChainItemDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Notes: string;
      Reference: string;
      Up: Array<number>;
      Down: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Notes = jsonData.Notes;
            this.Reference = jsonData.Reference;
            this.Up = (<number[]>jsonData.Up);
            this.Down = (<number[]>jsonData.Down);
         }
   }


   export class RoleChainItemDataContract extends Dezrez.Role.Query.Get.Progression.ChainItemDataContract {
      Notes: string;
      Reference: string;
      Up: Array<number>;
      Down: Array<number>;
      PurchasingRole: Dezrez.Role.Query.Get.Group.PurchasingRoleDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PurchasingRole = new Dezrez.Role.Query.Get.Group.PurchasingRoleDataContract(jsonData.PurchasingRole);
         }
   }


   export class GroupChainItemDataContract extends Dezrez.Role.Query.Get.Progression.ChainItemDataContract {
      Notes: string;
      Reference: string;
      Up: Array<number>;
      Down: Array<number>;
      Group: Dezrez.Group.Query.Get.GroupDataContract;
      Contact: Dezrez.Progression.Query.ProgressionContactDataContact;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Group = new Dezrez.Group.Query.Get.GroupDataContract(jsonData.Group);
            this.Contact = new Dezrez.Progression.Query.ProgressionContactDataContact(jsonData.Contact);
         }
   }

}

export module Dezrez.Role.Query.Matches {

   export class RoleApplicantMatchCriteriaDataContract {
      MatchType: Dezrez.System.EnumDataContract;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MatchType = new Dezrez.System.EnumDataContract(jsonData.MatchType);
            this.Name = jsonData.Name;
         }
   }


   export class RoleApplicantMatchDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Details: Dezrez.Role.Query.Matches.RoleApplicantMatchDetailDataContract;
      Group: Dezrez.Group.Query.Get.GroupDataContract;
      Grade: Dezrez.System.EnumDataContract;
      FinancialStatus: Dezrez.System.EnumDataContract;
      AskingPriceFrom: number;
      AskingPriceTo: number;
      PriceType: Dezrez.System.EnumDataContract;
      LastMailout: DateHelper;
      LastViewed: DateHelper;
      ViewingCount: number;
      OfferCount: number;
      HasMadeOffer: boolean;
      OfferDate: DateHelper;
      OfferAmount: number;
      OfferStatus: Dezrez.System.EnumDataContract;
      OwningTeam: Dezrez.Role.Query.Matches.RoleApplicantMatchOwningTeamDataContract;
      Branch: Dezrez.Lists.BranchSummaryDataContract;
      CreatedDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Details = new Dezrez.Role.Query.Matches.RoleApplicantMatchDetailDataContract(jsonData.Details);
            this.Group = new Dezrez.Group.Query.Get.GroupDataContract(jsonData.Group);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            this.FinancialStatus = new Dezrez.System.EnumDataContract(jsonData.FinancialStatus);
            this.AskingPriceFrom = jsonData.AskingPriceFrom;
            this.AskingPriceTo = jsonData.AskingPriceTo;
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.LastMailout = new DateHelper(jsonData.LastMailout, null, true);
            this.LastViewed = new DateHelper(jsonData.LastViewed, null, true);
            this.ViewingCount = jsonData.ViewingCount;
            this.OfferCount = jsonData.OfferCount;
            this.HasMadeOffer = jsonData.HasMadeOffer;
            this.OfferDate = new DateHelper(jsonData.OfferDate, null, true);
            this.OfferAmount = jsonData.OfferAmount;
            this.OfferStatus = new Dezrez.System.EnumDataContract(jsonData.OfferStatus);
            this.OwningTeam = new Dezrez.Role.Query.Matches.RoleApplicantMatchOwningTeamDataContract(jsonData.OwningTeam);
            this.Branch = new Dezrez.Lists.BranchSummaryDataContract(jsonData.Branch);
            this.CreatedDate = new DateHelper(jsonData.CreatedDate, null, true);
         }
   }


   export class RoleApplicantMatchDetailDataContract {
      MatchedCriteriaCount: number;
      TotalCriteriaCount: number;
      MatchPercentage: number;
      MatchedCriteria: Array<Dezrez.Role.Query.Matches.RoleApplicantMatchCriteriaDataContract>;
      UnmatchedCriteria: Array<Dezrez.Role.Query.Matches.RoleApplicantMatchCriteriaDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MatchedCriteriaCount = jsonData.MatchedCriteriaCount;
            this.TotalCriteriaCount = jsonData.TotalCriteriaCount;
            this.MatchPercentage = jsonData.MatchPercentage;
            var matchedCriteriaTempArray = _.map(jsonData.MatchedCriteria, item => { return new Dezrez.Role.Query.Matches.RoleApplicantMatchCriteriaDataContract(item);  });
            this.MatchedCriteria = <Dezrez.Role.Query.Matches.RoleApplicantMatchCriteriaDataContract[]>matchedCriteriaTempArray;

            var unmatchedCriteriaTempArray = _.map(jsonData.UnmatchedCriteria, item => { return new Dezrez.Role.Query.Matches.RoleApplicantMatchCriteriaDataContract(item);  });
            this.UnmatchedCriteria = <Dezrez.Role.Query.Matches.RoleApplicantMatchCriteriaDataContract[]>unmatchedCriteriaTempArray;

         }
   }


   export class RoleApplicantMatchFilterDataContract {
      Grades: Array<string>;
      FinancialStatus: Array<string>;
      ExcludeMailoutDays: number;
      OwningTeamId: number;
      BranchIds: Array<number>;
      IncludedRoleIds: Array<number>;
      ExcludedRoleIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Grades = (<string[]>jsonData.Grades);
            this.FinancialStatus = (<string[]>jsonData.FinancialStatus);
            this.ExcludeMailoutDays = jsonData.ExcludeMailoutDays;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchIds = (<number[]>jsonData.BranchIds);
            this.IncludedRoleIds = (<number[]>jsonData.IncludedRoleIds);
            this.ExcludedRoleIds = (<number[]>jsonData.ExcludedRoleIds);
         }
   }


   export class RoleApplicantMatchOwningTeamDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
         }
   }


   export class RoleApplicantMatchOwningTeamMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      FirstName: string;
      LastName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
         }
   }

}

export module Dezrez.Role.Query.EPC {

   export class EPCQueryDataContract {
      EPCType: Dezrez.System.EnumDataContract;
      EERCurrent: number;
      EERPotential: number;
      EIRCurrent: number;
      EIRPotential: number;
      Url: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.EPCType = new Dezrez.System.EnumDataContract(jsonData.EPCType);
            this.EERCurrent = jsonData.EERCurrent;
            this.EERPotential = jsonData.EERPotential;
            this.EIRCurrent = jsonData.EIRCurrent;
            this.EIRPotential = jsonData.EIRPotential;
            this.Url = jsonData.Url;
         }
   }

}

export module Dezrez.Stats.Query {

   export class InstructedSalesSummaryDataContract {
      TotalInstructed: number;
      TotalOnTheMarket: number;
      TotalNotOnTheMarket: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TotalInstructed = jsonData.TotalInstructed;
            this.TotalOnTheMarket = jsonData.TotalOnTheMarket;
            this.TotalNotOnTheMarket = jsonData.TotalNotOnTheMarket;
         }
   }


   export class RecentlyVisitedPageDataContract {
      EntityId: number;
      RoleId: number;
      LastVisitedDateTime: DateHelper;
      Description: string;
      GroupIcon: Dezrez.System.EnumDataContract;
      GroupType: Dezrez.System.EnumDataContract;
      Gender: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.EntityId = jsonData.EntityId;
            this.RoleId = jsonData.RoleId;
            this.LastVisitedDateTime = new DateHelper(jsonData.LastVisitedDateTime, null, true);
            this.Description = jsonData.Description;
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
         }
   }


   export class RecentlyVisitedPagesResultDataContract {
      Groups: Array<Dezrez.Stats.Query.RecentlyVisitedPageDataContract>;
      Properties: Array<Dezrez.Stats.Query.RecentlyVisitedPageDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            var groupsTempArray = _.map(jsonData.Groups, item => { return new Dezrez.Stats.Query.RecentlyVisitedPageDataContract(item);  });
            this.Groups = <Dezrez.Stats.Query.RecentlyVisitedPageDataContract[]>groupsTempArray;

            var propertiesTempArray = _.map(jsonData.Properties, item => { return new Dezrez.Stats.Query.RecentlyVisitedPageDataContract(item);  });
            this.Properties = <Dezrez.Stats.Query.RecentlyVisitedPageDataContract[]>propertiesTempArray;

         }
   }


   export class SalesEventsSummaryDataContract {
      TotalViewingsUpcoming: number;
      TotalViewingsToday: number;
      TotalOffersLastSevenDays: number;
      TotalOffersToday: number;
      TotalOffersAcceptedThisMonth: number;
      TotalOffersAcceptedThisWeek: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TotalViewingsUpcoming = jsonData.TotalViewingsUpcoming;
            this.TotalViewingsToday = jsonData.TotalViewingsToday;
            this.TotalOffersLastSevenDays = jsonData.TotalOffersLastSevenDays;
            this.TotalOffersToday = jsonData.TotalOffersToday;
            this.TotalOffersAcceptedThisMonth = jsonData.TotalOffersAcceptedThisMonth;
            this.TotalOffersAcceptedThisWeek = jsonData.TotalOffersAcceptedThisWeek;
         }
   }


   export class VisitedPageResponseDataContract {
      EntityId: number;
      PageType: string;
      IsSuccess: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.EntityId = jsonData.EntityId;
            this.PageType = jsonData.PageType;
            this.IsSuccess = jsonData.IsSuccess;
         }
   }

}

export module Dezrez.Portals {

   export class PortalDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      SystemName: string;
      Name: string;
      Description: string;
      LogoUrl: string;
      SupportEmail: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.SystemName = jsonData.SystemName;
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.LogoUrl = jsonData.LogoUrl;
            this.SupportEmail = jsonData.SupportEmail;
         }
   }


   export class PortalFeedbackItem {
      Title: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
         }
   }

}

export module Dezrez.Lists {

   export class BaseListFilterDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.CustomFilterConfig = jsonData.CustomFilterConfig;
            this.BranchId = jsonData.BranchId;
            this.Order = <Enums.ListOrder>(jsonData.Order);
            this.SearchTerm = jsonData.SearchTerm;
            this.FilterType = new Dezrez.System.EnumDataContract(jsonData.FilterType);
            this.ShowDeleted = jsonData.ShowDeleted;
         }
   }


   export class BranchSummaryDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
         }
   }


   export class ListPriceDataContract {
      Name: string;
      Value: number;
      Currency: string;
      Other: string;
      Text: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
            this.Currency = jsonData.Currency;
            this.Other = jsonData.Other;
            this.Text = jsonData.Text;
         }
   }


   export class ListCsvCommandDataContract {
      Ids: Array<number>;
      ExcludedIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Ids = (<number[]>jsonData.Ids);
            this.ExcludedIds = (<number[]>jsonData.ExcludedIds);
         }
   }


   export class GroupInterestListCsvCommandDataContract extends Dezrez.Lists.ListCsvCommandDataContract {
      Ids: Array<number>;
      ExcludedIds: Array<number>;
      Filter: Dezrez.Lists.GroupInterests.GroupInterestListFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Filter = new Dezrez.Lists.GroupInterests.GroupInterestListFilterDataContract(jsonData.Filter);
         }
   }


   export class GroupListCsvCommandDataContract extends Dezrez.Lists.ListCsvCommandDataContract {
      Ids: Array<number>;
      ExcludedIds: Array<number>;
      Filter: Dezrez.Lists.Groups.Filter.GroupListFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Filter = new Dezrez.Lists.Groups.Filter.GroupListFilterDataContract(jsonData.Filter);
         }
   }


   export class PropertyListCsvCommandDataContract extends Dezrez.Lists.ListCsvCommandDataContract {
      Ids: Array<number>;
      ExcludedIds: Array<number>;
      Filter: Dezrez.Lists.Property.Filter.PropertyListFilterDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Filter = new Dezrez.Lists.Property.Filter.PropertyListFilterDataContract(jsonData.Filter);
         }
   }

}

export module Dezrez.Lists.Groups {

   export class GroupListGroupDataContract extends Dezrez.System.BaseQueryDataContract {
      CreatedDate: DateHelper;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      GroupType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
         }
   }


   export class GroupListOwningTeamDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
         }
   }


   export class GroupListOwningTeamMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      FirstName: string;
      LastName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
         }
   }


   export class GroupListCriteriaDataContract {
      MinimumBedrooms: number;
      BudgetFrom: number;
      BudgetTo: number;
      TagIds: Array<number>;
      PriceType: Dezrez.System.EnumDataContract;
      TargetMoveIn: DateHelper;
      TermType: Dezrez.System.EnumDataContract;
      Students: boolean;
      IsSmoker: boolean;
      PetOwner: boolean;
      HousingBenefits: boolean;
      FurnishLevelType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MinimumBedrooms = jsonData.MinimumBedrooms;
            this.BudgetFrom = jsonData.BudgetFrom;
            this.BudgetTo = jsonData.BudgetTo;
            this.TagIds = (<number[]>jsonData.TagIds);
            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.TargetMoveIn = new DateHelper(jsonData.TargetMoveIn, null, true);
            this.TermType = new Dezrez.System.EnumDataContract(jsonData.TermType);
            this.Students = jsonData.Students;
            this.IsSmoker = jsonData.IsSmoker;
            this.PetOwner = jsonData.PetOwner;
            this.HousingBenefits = jsonData.HousingBenefits;
            this.FurnishLevelType = new Dezrez.System.EnumDataContract(jsonData.FurnishLevelType);
         }
   }


   export class GroupListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Group: Dezrez.Lists.Groups.GroupListPeopleGroupDataContract;
      Criteria: Dezrez.Lists.Groups.GroupListCriteriaDataContract;
      Grade: Dezrez.System.EnumDataContract;
      Origins: Array<Dezrez.System.EnumDataContract>;
      DateLastContacted: DateHelper;
      ViewingDates: Array<Date>;
      OwningTeam: Dezrez.Lists.Groups.GroupListOwningTeamDataContract;
      RoleType: Dezrez.System.EnumDataContract;
      FinancialStatus: Dezrez.System.EnumDataContract;
      Viewings: number;
      Offers: number;
      TelephoneCalls: number;
      EmailsSent: number;
      Dates: any;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Group = new Dezrez.Lists.Groups.GroupListPeopleGroupDataContract(jsonData.Group);
            this.Criteria = new Dezrez.Lists.Groups.GroupListCriteriaDataContract(jsonData.Criteria);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            var originsTempArray = _.map(jsonData.Origins, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Origins = <Dezrez.System.EnumDataContract[]>originsTempArray;

            this.DateLastContacted = new DateHelper(jsonData.DateLastContacted, null, true);
            this.ViewingDates = (<Date[]>jsonData.ViewingDates);
            this.OwningTeam = new Dezrez.Lists.Groups.GroupListOwningTeamDataContract(jsonData.OwningTeam);
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.FinancialStatus = new Dezrez.System.EnumDataContract(jsonData.FinancialStatus);
            this.Viewings = jsonData.Viewings;
            this.Offers = jsonData.Offers;
            this.TelephoneCalls = jsonData.TelephoneCalls;
            this.EmailsSent = jsonData.EmailsSent;
            this.Dates = jsonData.Dates;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
         }
   }


   export class GroupListPeopleGroupDataContract extends Dezrez.Lists.Groups.GroupListGroupDataContract {
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      GroupType: Dezrez.System.EnumDataContract;
      Description: string;
      GroupIcon: Dezrez.System.EnumDataContract;
      PrimaryGroupMember: Dezrez.Lists.Groups.GroupListPrimaryGroupMemberDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Description = jsonData.Description;
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.PrimaryGroupMember = new Dezrez.Lists.Groups.GroupListPrimaryGroupMemberDataContract(jsonData.PrimaryGroupMember);
         }
   }


   export class GroupListPrimaryGroupMemberDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      FirstName: string;
      LastName: string;
      ContactName: string;
      PrimaryEmail: Dezrez.People.Query.Get.ContactItemDataContract;
      PrimaryTelephone: Dezrez.People.Query.Get.ContactItemDataContract;
      Gender: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.ContactName = jsonData.ContactName;
            this.PrimaryEmail = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryEmail);
            this.PrimaryTelephone = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.PrimaryTelephone);
            this.Gender = new Dezrez.System.EnumDataContract(jsonData.Gender);
         }
   }


   export class GroupListPersonDataContract {
      GroupId: number;
      PersonIds: Array<number>;
      InterestRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.PersonIds = (<number[]>jsonData.PersonIds);
            this.InterestRoleId = jsonData.InterestRoleId;
         }
   }

}

export module Dezrez.Lists.Groups.Filter {

   export class GroupListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      BedroomsMin: number;
      PriceFrom: number;
      PriceTo: number;
      PriceType: string;
      TagIds: Array<number>;
      Grades: Array<string>;
      RoleTypes: Array<string>;
      SourceId: number;
      OwningTeamIds: Array<number>;
      MatchType: Enums.MatchType;
      FinancialStatus: string;
      LastContactedFrom: DateHelper;
      LastContactedTo: DateHelper;
      CreatedFrom: DateHelper;
      CreatedTo: DateHelper;
      SearchStatuses: Array<string>;
      Sort: Enums.GroupListSort;
      Ids: Array<number>;
      GroupIds: Array<number>;
      ExcludeInactive: boolean;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.BedroomsMin = jsonData.BedroomsMin;
            this.PriceFrom = jsonData.PriceFrom;
            this.PriceTo = jsonData.PriceTo;
            this.PriceType = jsonData.PriceType;
            this.TagIds = (<number[]>jsonData.TagIds);
            this.Grades = (<string[]>jsonData.Grades);
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.SourceId = jsonData.SourceId;
            this.OwningTeamIds = (<number[]>jsonData.OwningTeamIds);
            this.MatchType = <Enums.MatchType>(jsonData.MatchType);
            this.FinancialStatus = jsonData.FinancialStatus;
            this.LastContactedFrom = new DateHelper(jsonData.LastContactedFrom, null, true);
            this.LastContactedTo = new DateHelper(jsonData.LastContactedTo, null, true);
            this.CreatedFrom = new DateHelper(jsonData.CreatedFrom, null, true);
            this.CreatedTo = new DateHelper(jsonData.CreatedTo, null, true);
            this.SearchStatuses = (<string[]>jsonData.SearchStatuses);
            this.Sort = <Enums.GroupListSort>(jsonData.Sort);
            this.Ids = (<number[]>jsonData.Ids);
            this.GroupIds = (<number[]>jsonData.GroupIds);
            this.ExcludeInactive = jsonData.ExcludeInactive;
            this.AdditionalIds = (<number[]>jsonData.AdditionalIds);
            this.ExcludedIds = (<number[]>jsonData.ExcludedIds);
         }
   }


   export class SaveGroupListFilterDataContract extends Dezrez.Lists.Groups.Filter.GroupListFilterDataContract {
      BedroomsMin: number;
      PriceFrom: number;
      PriceTo: number;
      PriceType: string;
      TagIds: Array<number>;
      Grades: Array<string>;
      RoleTypes: Array<string>;
      SourceId: number;
      OwningTeamIds: Array<number>;
      MatchType: Enums.MatchType;
      FinancialStatus: string;
      LastContactedFrom: DateHelper;
      LastContactedTo: DateHelper;
      CreatedFrom: DateHelper;
      CreatedTo: DateHelper;
      SearchStatuses: Array<string>;
      Sort: Enums.GroupListSort;
      Ids: Array<number>;
      GroupIds: Array<number>;
      ExcludeInactive: boolean;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }

}

export module Dezrez.Lists.Events {

   export class EventListDataContract extends Dezrez.Events.Query.BaseEventDataContract {
      Name: string;
      Description: string;
      DateTime: DateHelper;
      EventCategory: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      EventStatus: Dezrez.System.EnumDataContract;
      Negotiators: Array<Dezrez.Events.Query.ListNegotiatorDataContract>;
      BranchId: number;
      OwningTeamId: number;
      TeamAccessType: string;
      StartDate: DateHelper;
      EndDate: DateHelper;
      AllDayEvent: boolean;
      OfferStatus: Dezrez.System.EnumDataContract;
      Roles: Array<Dezrez.Lists.Events.EventListRoleDataContract>;
      Properties: Array<Dezrez.Lists.Property.ListPropertyDataContract>;
      Prices: Array<Dezrez.Lists.ListPriceDataContract>;
      PriceType: Dezrez.System.EnumDataContract;
      Descriptions: any;
      Branch: Dezrez.Lists.BranchSummaryDataContract;
      Notes: Array<Dezrez.Lists.Events.EventListNoteDataContract>;
      DocumentIds: Array<number>;
      Dates: any;
      TeamId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.EndDate = new DateHelper(jsonData.EndDate, null, true);
            this.AllDayEvent = jsonData.AllDayEvent;
            this.OfferStatus = new Dezrez.System.EnumDataContract(jsonData.OfferStatus);
            var rolesTempArray = _.map(jsonData.Roles, item => { return new Dezrez.Lists.Events.EventListRoleDataContract(item);  });
            this.Roles = <Dezrez.Lists.Events.EventListRoleDataContract[]>rolesTempArray;

            var propertiesTempArray = _.map(jsonData.Properties, item => { return new Dezrez.Lists.Property.ListPropertyDataContract(item);  });
            this.Properties = <Dezrez.Lists.Property.ListPropertyDataContract[]>propertiesTempArray;

            var pricesTempArray = _.map(jsonData.Prices, item => { return new Dezrez.Lists.ListPriceDataContract(item);  });
            this.Prices = <Dezrez.Lists.ListPriceDataContract[]>pricesTempArray;

            this.PriceType = new Dezrez.System.EnumDataContract(jsonData.PriceType);
            this.Descriptions = jsonData.Descriptions;
            this.Branch = new Dezrez.Lists.BranchSummaryDataContract(jsonData.Branch);
            var notesTempArray = _.map(jsonData.Notes, item => { return new Dezrez.Lists.Events.EventListNoteDataContract(item);  });
            this.Notes = <Dezrez.Lists.Events.EventListNoteDataContract[]>notesTempArray;

            this.DocumentIds = (<number[]>jsonData.DocumentIds);
            this.Dates = jsonData.Dates;
            this.TeamId = jsonData.TeamId;
         }
   }


   export class AppointmentListDataContract extends Dezrez.Lists.Events.EventListDataContract {
      StartDate: DateHelper;
      EndDate: DateHelper;
      AllDayEvent: boolean;
      OfferStatus: Dezrez.System.EnumDataContract;
      Roles: Array<Dezrez.Lists.Events.EventListRoleDataContract>;
      Properties: Array<Dezrez.Lists.Property.ListPropertyDataContract>;
      Prices: Array<Dezrez.Lists.ListPriceDataContract>;
      PriceType: Dezrez.System.EnumDataContract;
      Descriptions: any;
      Branch: Dezrez.Lists.BranchSummaryDataContract;
      Notes: Array<Dezrez.Lists.Events.EventListNoteDataContract>;
      DocumentIds: Array<number>;
      Dates: any;
      TeamId: number;
      AttendingGroups: Array<Dezrez.Lists.Events.EventListAttendeeCollectionDataContract>;
      MeetingPlace: Dezrez.Lists.Events.MeetingPlaceEventListDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var attendingGroupsTempArray = _.map(jsonData.AttendingGroups, item => { return new Dezrez.Lists.Events.EventListAttendeeCollectionDataContract(item);  });
            this.AttendingGroups = <Dezrez.Lists.Events.EventListAttendeeCollectionDataContract[]>attendingGroupsTempArray;

            this.MeetingPlace = new Dezrez.Lists.Events.MeetingPlaceEventListDataContract(jsonData.MeetingPlace);
         }
   }


   export class EventListAttendeePersonDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      FirstName: string;
      LastName: string;
      Address: Dezrez.People.Query.Get.ContactItemDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
            this.Address = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.Address);
         }
   }


   export class EventListPeopleGroupDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      OwningTeamId: number;
      BranchId: number;
      Name: string;
      TeamAccessType: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      PrimaryGroupMember: Dezrez.Events.Query.ListPersonDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.Description = jsonData.Description;
            this.GroupType = new Dezrez.System.EnumDataContract(jsonData.GroupType);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.PrimaryGroupMember = new Dezrez.Events.Query.ListPersonDataContract(jsonData.PrimaryGroupMember);
         }
   }


   export class EventListRoleDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      Rolestatus: Dezrez.System.EnumDataContract;
      RequestedLotNumber: number;
      PropertyAddress: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.Rolestatus = new Dezrez.System.EnumDataContract(jsonData.Rolestatus);
            this.RequestedLotNumber = jsonData.RequestedLotNumber;
            this.PropertyAddress = jsonData.PropertyAddress;
         }
   }


   export class MeetingPlaceEventListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      AddressId: number;
      Name: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AddressId = jsonData.AddressId;
            this.Name = jsonData.Name;
         }
   }


   export class EventListAttendeeCollectionDataContract {
      EventId: number;
      Type: Dezrez.System.EnumDataContract;
      Group: Dezrez.Lists.Events.EventListPeopleGroupDataContract;
      AttendingPeople: Array<Dezrez.Lists.Events.EventListAttendeePersonDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.EventId = jsonData.EventId;
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Group = new Dezrez.Lists.Events.EventListPeopleGroupDataContract(jsonData.Group);
            var attendingPeopleTempArray = _.map(jsonData.AttendingPeople, item => { return new Dezrez.Lists.Events.EventListAttendeePersonDataContract(item);  });
            this.AttendingPeople = <Dezrez.Lists.Events.EventListAttendeePersonDataContract[]>attendingPeopleTempArray;

         }
   }


   export class EventListNoteDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Note: string;
      CreatedDate: DateHelper;
      NegotiatorId: number;
      ApplicableToGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Note = jsonData.Note;
            this.CreatedDate = new DateHelper(jsonData.CreatedDate, null, true);
            this.NegotiatorId = jsonData.NegotiatorId;
            this.ApplicableToGroupIds = (<number[]>jsonData.ApplicableToGroupIds);
         }
   }

}

export module Dezrez.Lists.Events.Filter {

   export class EventListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      Id: number;
      CreatedBy: Array<number>;
      NegotiatorIds: Array<number>;
      RoleIds: Array<number>;
      GroupId: number;
      From: DateHelper;
      To: DateHelper;
      CreatedFrom: DateHelper;
      CreatedTo: DateHelper;
      OfferStatuses: Array<Dezrez.System.EnumDataContract>;
      EventCategories: Array<Dezrez.System.EnumDataContract>;
      EventTypes: Array<Dezrez.System.EnumDataContract>;
      EventStatuses: Array<Dezrez.System.EnumDataContract>;
      IncludeDrafts: boolean;
      ExcludedRevisedOffers: boolean;
      ExcludedTypes: Array<Dezrez.System.EnumDataContract>;
      RoleTypes: Array<string>;
      PropertyId: number;
      Descriptions: any;
      FeedbackTaken: boolean;
      FeedbackReported: boolean;
      SortType: Enums.EventListSortType;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Id = jsonData.Id;
            this.CreatedBy = (<number[]>jsonData.CreatedBy);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.RoleIds = (<number[]>jsonData.RoleIds);
            this.GroupId = jsonData.GroupId;
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.CreatedFrom = new DateHelper(jsonData.CreatedFrom, null, true);
            this.CreatedTo = new DateHelper(jsonData.CreatedTo, null, true);
            var offerStatusesTempArray = _.map(jsonData.OfferStatuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.OfferStatuses = <Dezrez.System.EnumDataContract[]>offerStatusesTempArray;

            var eventCategoriesTempArray = _.map(jsonData.EventCategories, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.EventCategories = <Dezrez.System.EnumDataContract[]>eventCategoriesTempArray;

            var eventTypesTempArray = _.map(jsonData.EventTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.EventTypes = <Dezrez.System.EnumDataContract[]>eventTypesTempArray;

            var eventStatusesTempArray = _.map(jsonData.EventStatuses, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.EventStatuses = <Dezrez.System.EnumDataContract[]>eventStatusesTempArray;

            this.IncludeDrafts = jsonData.IncludeDrafts;
            this.ExcludedRevisedOffers = jsonData.ExcludedRevisedOffers;
            var excludedTypesTempArray = _.map(jsonData.ExcludedTypes, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.ExcludedTypes = <Dezrez.System.EnumDataContract[]>excludedTypesTempArray;

            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.PropertyId = jsonData.PropertyId;
            this.Descriptions = jsonData.Descriptions;
            this.FeedbackTaken = jsonData.FeedbackTaken;
            this.FeedbackReported = jsonData.FeedbackReported;
            this.SortType = <Enums.EventListSortType>(jsonData.SortType);
         }
   }


   export class SaveEventListFilterDataContract extends Dezrez.Lists.Events.Filter.EventListFilterDataContract {
      Id: number;
      CreatedBy: Array<number>;
      NegotiatorIds: Array<number>;
      RoleIds: Array<number>;
      GroupId: number;
      From: DateHelper;
      To: DateHelper;
      CreatedFrom: DateHelper;
      CreatedTo: DateHelper;
      OfferStatuses: Array<Dezrez.System.EnumDataContract>;
      EventCategories: Array<Dezrez.System.EnumDataContract>;
      EventTypes: Array<Dezrez.System.EnumDataContract>;
      EventStatuses: Array<Dezrez.System.EnumDataContract>;
      IncludeDrafts: boolean;
      ExcludedRevisedOffers: boolean;
      ExcludedTypes: Array<Dezrez.System.EnumDataContract>;
      RoleTypes: Array<string>;
      PropertyId: number;
      Descriptions: any;
      FeedbackTaken: boolean;
      FeedbackReported: boolean;
      SortType: Enums.EventListSortType;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }

}

export module Dezrez.Lists.Property {

   export class ListPropertyAddressDataContract {
      Number: string;
      BuildingName: string;
      OrganizationName: string;
      Street: string;
      Town: string;
      Locality: string;
      County: string;
      Postcode: string;
      LatitudeLongitude: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Number = jsonData.Number;
            this.BuildingName = jsonData.BuildingName;
            this.OrganizationName = jsonData.OrganizationName;
            this.Street = jsonData.Street;
            this.Town = jsonData.Town;
            this.Locality = jsonData.Locality;
            this.County = jsonData.County;
            this.Postcode = jsonData.Postcode;
            this.LatitudeLongitude = jsonData.LatitudeLongitude;
         }
   }


   export class ListPropertyDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Lists.Property.ListPropertyAddressDataContract;
      Bedrooms: number;
      PropertyType: Dezrez.System.EnumDataContract;
      Image: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Lists.Property.ListPropertyAddressDataContract(jsonData.Address);
            this.Bedrooms = jsonData.Bedrooms;
            this.PropertyType = new Dezrez.System.EnumDataContract(jsonData.PropertyType);
            this.Image = jsonData.Image;
         }
   }


   export class PropertyListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Address: Dezrez.Lists.Property.ListPropertyAddressDataContract;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      PropertyType: Dezrez.System.EnumDataContract;
      LeaseType: Dezrez.System.EnumDataContract;
      AskingPrice: Dezrez.Role.Query.Get.Marketing.ExtendedPriceDataContract;
      MarketingFlags: Array<Dezrez.System.EnumDataContract>;
      EstimatedExchangeDate: DateHelper;
      EstimatedCompletionDate: DateHelper;
      ActualExchangeDate: DateHelper;
      ActualCompletionDate: DateHelper;
      OfferAcceptedDate: DateHelper;
      ValuedDate: DateHelper;
      Dates: any;
      ChainNegotiators: any;
      Negotiators: Array<Dezrez.Events.Query.ListNegotiatorDataContract>;
      AgencyFee: Dezrez.Agency.Query.Fees.AgencyFeeDataContract;
      OfferingGroup: Dezrez.Lists.Property.PropertyListGroupDataContract;
      OwningGroup: Dezrez.Lists.Property.PropertyListGroupDataContract;
      OwningTeam: Dezrez.Lists.Property.PropertyListGroupDataContract;
      CreatedBy: Dezrez.People.Query.Get.CreatedByDataContract;
      ExchangedPrice: number;
      ExchangedRecordedBy: Dezrez.Events.Query.ListNegotiatorDataContract;
      OfferAcceptedPrice: number;
      PropertyId: number;
      TagIds: Array<number>;
      Bedrooms: number;
      Bathrooms: number;
      Receptions: number;
      Viewings: number;
      Offers: number;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      Name: string;
      TeamAccessType: string;
      SummaryDescription: string;
      OwningTeamId: number;
      BranchId: number;
      Branch: Dezrez.Lists.BranchSummaryDataContract;
      RequestedLotNumber: number;
      Reserve: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      AuctionRoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Address = new Dezrez.Lists.Property.ListPropertyAddressDataContract(jsonData.Address);
            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.PropertyType = new Dezrez.System.EnumDataContract(jsonData.PropertyType);
            this.LeaseType = new Dezrez.System.EnumDataContract(jsonData.LeaseType);
            this.AskingPrice = new Dezrez.Role.Query.Get.Marketing.ExtendedPriceDataContract(jsonData.AskingPrice);
            var marketingFlagsTempArray = _.map(jsonData.MarketingFlags, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.MarketingFlags = <Dezrez.System.EnumDataContract[]>marketingFlagsTempArray;

            this.EstimatedExchangeDate = new DateHelper(jsonData.EstimatedExchangeDate, null, true);
            this.EstimatedCompletionDate = new DateHelper(jsonData.EstimatedCompletionDate, null, true);
            this.ActualExchangeDate = new DateHelper(jsonData.ActualExchangeDate, null, true);
            this.ActualCompletionDate = new DateHelper(jsonData.ActualCompletionDate, null, true);
            this.OfferAcceptedDate = new DateHelper(jsonData.OfferAcceptedDate, null, true);
            this.ValuedDate = new DateHelper(jsonData.ValuedDate, null, true);
            this.Dates = jsonData.Dates;
            this.ChainNegotiators = jsonData.ChainNegotiators;
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Events.Query.ListNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Events.Query.ListNegotiatorDataContract[]>negotiatorsTempArray;

            this.AgencyFee = new Dezrez.Agency.Query.Fees.AgencyFeeDataContract(jsonData.AgencyFee);
            this.OfferingGroup = new Dezrez.Lists.Property.PropertyListGroupDataContract(jsonData.OfferingGroup);
            this.OwningGroup = new Dezrez.Lists.Property.PropertyListGroupDataContract(jsonData.OwningGroup);
            this.OwningTeam = new Dezrez.Lists.Property.PropertyListGroupDataContract(jsonData.OwningTeam);
            this.CreatedBy = new Dezrez.People.Query.Get.CreatedByDataContract(jsonData.CreatedBy);
            this.ExchangedPrice = jsonData.ExchangedPrice;
            this.ExchangedRecordedBy = new Dezrez.Events.Query.ListNegotiatorDataContract(jsonData.ExchangedRecordedBy);
            this.OfferAcceptedPrice = jsonData.OfferAcceptedPrice;
            this.PropertyId = jsonData.PropertyId;
            this.TagIds = (<number[]>jsonData.TagIds);
            this.Bedrooms = jsonData.Bedrooms;
            this.Bathrooms = jsonData.Bathrooms;
            this.Receptions = jsonData.Receptions;
            this.Viewings = jsonData.Viewings;
            this.Offers = jsonData.Offers;
            this.DefaultPicture = new Dezrez.Media.DocumentDataContract(jsonData.DefaultPicture);
            this.Name = jsonData.Name;
            this.TeamAccessType = jsonData.TeamAccessType;
            this.SummaryDescription = jsonData.SummaryDescription;
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.Branch = new Dezrez.Lists.BranchSummaryDataContract(jsonData.Branch);
            this.RequestedLotNumber = jsonData.RequestedLotNumber;
            this.Reserve = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Reserve);
            this.AuctionRoleType = new Dezrez.System.EnumDataContract(jsonData.AuctionRoleType);
         }
   }


   export class PropertyListGroupDataContract extends Dezrez.Group.Query.Get.GroupDataContract {
      Name: string;
      Description: string;
      GroupType: Dezrez.System.EnumDataContract;
      GroupIcon: Dezrez.System.EnumDataContract;
      SystemStatus: Dezrez.System.EnumDataContract;
      GroupBackgroundImageUrl: string;
      Notes: string;
      Members: Array<Dezrez.Group.Query.Get.GroupMemberDataContract>;
      OwningTeamId: number;
      BranchId: number;
      TeamAccessType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.OwningTeamId = jsonData.OwningTeamId;
            this.BranchId = jsonData.BranchId;
            this.TeamAccessType = jsonData.TeamAccessType;
         }
   }

}

export module Dezrez.Lists.Property.Filter {

   export class PropertyListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      NegotiatorIds: Array<number>;
      OwningTeamIds: Array<number>;
      ExchangedRecordedBy: Array<number>;
      ExchangeFrom: DateHelper;
      ExchangeTo: DateHelper;
      CompletionsFrom: DateHelper;
      CompletionsTo: DateHelper;
      OfferAcceptedFrom: DateHelper;
      OfferAcceptedTo: DateHelper;
      InstructedFrom: DateHelper;
      InstructedTo: DateHelper;
      BedroomsMin: number;
      PriceRangeMin: number;
      PriceRangeMax: number;
      PriceType: string;
      TagIds: Array<number>;
      RoleTypes: Array<string>;
      RoleStatuses: Array<string>;
      MarketingFlags: any;
      Latitude: number;
      Longitude: number;
      MileRadius: number;
      Sort: Enums.PropertyListSort;
      RegionId: number;
      RegionSource: string;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      PropertyIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.OwningTeamIds = (<number[]>jsonData.OwningTeamIds);
            this.ExchangedRecordedBy = (<number[]>jsonData.ExchangedRecordedBy);
            this.ExchangeFrom = new DateHelper(jsonData.ExchangeFrom, null, true);
            this.ExchangeTo = new DateHelper(jsonData.ExchangeTo, null, true);
            this.CompletionsFrom = new DateHelper(jsonData.CompletionsFrom, null, true);
            this.CompletionsTo = new DateHelper(jsonData.CompletionsTo, null, true);
            this.OfferAcceptedFrom = new DateHelper(jsonData.OfferAcceptedFrom, null, true);
            this.OfferAcceptedTo = new DateHelper(jsonData.OfferAcceptedTo, null, true);
            this.InstructedFrom = new DateHelper(jsonData.InstructedFrom, null, true);
            this.InstructedTo = new DateHelper(jsonData.InstructedTo, null, true);
            this.BedroomsMin = jsonData.BedroomsMin;
            this.PriceRangeMin = jsonData.PriceRangeMin;
            this.PriceRangeMax = jsonData.PriceRangeMax;
            this.PriceType = jsonData.PriceType;
            this.TagIds = (<number[]>jsonData.TagIds);
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.RoleStatuses = (<string[]>jsonData.RoleStatuses);
            this.MarketingFlags = jsonData.MarketingFlags;
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.MileRadius = jsonData.MileRadius;
            this.Sort = <Enums.PropertyListSort>(jsonData.Sort);
            this.RegionId = jsonData.RegionId;
            this.RegionSource = jsonData.RegionSource;
            this.AdditionalIds = (<number[]>jsonData.AdditionalIds);
            this.ExcludedIds = (<number[]>jsonData.ExcludedIds);
            this.PropertyIds = (<number[]>jsonData.PropertyIds);
         }
   }


   export class SavePropertyListFilterDataContract extends Dezrez.Lists.Property.Filter.PropertyListFilterDataContract {
      NegotiatorIds: Array<number>;
      OwningTeamIds: Array<number>;
      ExchangedRecordedBy: Array<number>;
      ExchangeFrom: DateHelper;
      ExchangeTo: DateHelper;
      CompletionsFrom: DateHelper;
      CompletionsTo: DateHelper;
      OfferAcceptedFrom: DateHelper;
      OfferAcceptedTo: DateHelper;
      InstructedFrom: DateHelper;
      InstructedTo: DateHelper;
      BedroomsMin: number;
      PriceRangeMin: number;
      PriceRangeMax: number;
      PriceType: string;
      TagIds: Array<number>;
      RoleTypes: Array<string>;
      RoleStatuses: Array<string>;
      MarketingFlags: any;
      Latitude: number;
      Longitude: number;
      MileRadius: number;
      Sort: Enums.PropertyListSort;
      RegionId: number;
      RegionSource: string;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      PropertyIds: Array<number>;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }

}

export module Dezrez.Lists.Stats {

   export class ListStatsDataContract {
      Name: string;
      Value: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }

}

export module Dezrez.Lists.GroupInterests {

   export class GroupInterestListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Group: Dezrez.Lists.Groups.GroupListPeopleGroupDataContract;
      InterestFlags: Array<Dezrez.System.EnumDataContract>;
      DateLastContacted: DateHelper;
      Grade: Dezrez.System.EnumDataContract;
      Origins: Array<Dezrez.System.EnumDataContract>;
      RoleType: Dezrez.System.EnumDataContract;
      RoleStatus: Dezrez.System.EnumDataContract;
      Viewings: number;
      Offers: number;
      TelephoneCalls: number;
      EmailsSent: number;
      MarketingRoles: Array<Dezrez.Lists.GroupInterests.GroupInterestListRoleDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Group = new Dezrez.Lists.Groups.GroupListPeopleGroupDataContract(jsonData.Group);
            var interestFlagsTempArray = _.map(jsonData.InterestFlags, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.InterestFlags = <Dezrez.System.EnumDataContract[]>interestFlagsTempArray;

            this.DateLastContacted = new DateHelper(jsonData.DateLastContacted, null, true);
            this.Grade = new Dezrez.System.EnumDataContract(jsonData.Grade);
            var originsTempArray = _.map(jsonData.Origins, item => { return new Dezrez.System.EnumDataContract(item);  });
            this.Origins = <Dezrez.System.EnumDataContract[]>originsTempArray;

            this.RoleType = new Dezrez.System.EnumDataContract(jsonData.RoleType);
            this.RoleStatus = new Dezrez.System.EnumDataContract(jsonData.RoleStatus);
            this.Viewings = jsonData.Viewings;
            this.Offers = jsonData.Offers;
            this.TelephoneCalls = jsonData.TelephoneCalls;
            this.EmailsSent = jsonData.EmailsSent;
            var marketingRolesTempArray = _.map(jsonData.MarketingRoles, item => { return new Dezrez.Lists.GroupInterests.GroupInterestListRoleDataContract(item);  });
            this.MarketingRoles = <Dezrez.Lists.GroupInterests.GroupInterestListRoleDataContract[]>marketingRolesTempArray;

         }
   }


   export class GroupInterestListRoleDataContract extends Dezrez.Lists.Events.EventListRoleDataContract {
      Name: string;
      RoleType: Dezrez.System.EnumDataContract;
      Rolestatus: Dezrez.System.EnumDataContract;
      RequestedLotNumber: number;
      PropertyAddress: string;
      StartDate: DateHelper;
      CompletedDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.StartDate = new DateHelper(jsonData.StartDate, null, true);
            this.CompletedDate = new DateHelper(jsonData.CompletedDate, null, true);
         }
   }


   export class GroupInterestListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      InterestFlags: Array<string>;
      Origins: Array<string>;
      Grades: Array<string>;
      RoleTypes: Array<string>;
      RoleStatuses: Array<string>;
      LastContactedFrom: DateHelper;
      LastContactedTo: DateHelper;
      CreatedFrom: DateHelper;
      CreatedTo: DateHelper;
      LandlordVendorFrom: DateHelper;
      LandlordVendorTo: DateHelper;
      Sort: Enums.GroupInterestListSort;
      GroupIds: Array<number>;
      OwningTeamIds: Array<number>;
      RoleIds: Array<number>;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.InterestFlags = (<string[]>jsonData.InterestFlags);
            this.Origins = (<string[]>jsonData.Origins);
            this.Grades = (<string[]>jsonData.Grades);
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.RoleStatuses = (<string[]>jsonData.RoleStatuses);
            this.LastContactedFrom = new DateHelper(jsonData.LastContactedFrom, null, true);
            this.LastContactedTo = new DateHelper(jsonData.LastContactedTo, null, true);
            this.CreatedFrom = new DateHelper(jsonData.CreatedFrom, null, true);
            this.CreatedTo = new DateHelper(jsonData.CreatedTo, null, true);
            this.LandlordVendorFrom = new DateHelper(jsonData.LandlordVendorFrom, null, true);
            this.LandlordVendorTo = new DateHelper(jsonData.LandlordVendorTo, null, true);
            this.Sort = <Enums.GroupInterestListSort>(jsonData.Sort);
            this.GroupIds = (<number[]>jsonData.GroupIds);
            this.OwningTeamIds = (<number[]>jsonData.OwningTeamIds);
            this.RoleIds = (<number[]>jsonData.RoleIds);
            this.AdditionalIds = (<number[]>jsonData.AdditionalIds);
            this.ExcludedIds = (<number[]>jsonData.ExcludedIds);
         }
   }


   export class SaveGroupInterestListFilterDataContract extends Dezrez.Lists.GroupInterests.GroupInterestListFilterDataContract {
      InterestFlags: Array<string>;
      Origins: Array<string>;
      Grades: Array<string>;
      RoleTypes: Array<string>;
      RoleStatuses: Array<string>;
      LastContactedFrom: DateHelper;
      LastContactedTo: DateHelper;
      CreatedFrom: DateHelper;
      CreatedTo: DateHelper;
      LandlordVendorFrom: DateHelper;
      LandlordVendorTo: DateHelper;
      Sort: Enums.GroupInterestListSort;
      GroupIds: Array<number>;
      OwningTeamIds: Array<number>;
      RoleIds: Array<number>;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }

}

export module Dezrez.Lists.Todos {

   export class TodoListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ToDoOwner: Dezrez.Events.Query.ListNegotiatorDataContract;
      Title: string;
      Description: string;
      Negotiators: Array<Dezrez.Events.Query.ListNegotiatorDataContract>;
      Interval: Dezrez.System.EnumDataContract;
      Priority: Dezrez.System.EnumDataContract;
      SuggestedSchedule: Dezrez.System.EnumDataContract;
      ToDoType: Dezrez.System.EnumDataContract;
      Tasks: Array<Dezrez.ToDo.Query.TaskDetailsDataContract>;
      CompletedTasks: number;
      PendingTasks: number;
      TotalTasks: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToDoOwner = new Dezrez.Events.Query.ListNegotiatorDataContract(jsonData.ToDoOwner);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.Events.Query.ListNegotiatorDataContract(item);  });
            this.Negotiators = <Dezrez.Events.Query.ListNegotiatorDataContract[]>negotiatorsTempArray;

            this.Interval = new Dezrez.System.EnumDataContract(jsonData.Interval);
            this.Priority = new Dezrez.System.EnumDataContract(jsonData.Priority);
            this.SuggestedSchedule = new Dezrez.System.EnumDataContract(jsonData.SuggestedSchedule);
            this.ToDoType = new Dezrez.System.EnumDataContract(jsonData.ToDoType);
            var tasksTempArray = _.map(jsonData.Tasks, item => { return new Dezrez.ToDo.Query.TaskDetailsDataContract(item);  });
            this.Tasks = <Dezrez.ToDo.Query.TaskDetailsDataContract[]>tasksTempArray;

            this.CompletedTasks = jsonData.CompletedTasks;
            this.PendingTasks = jsonData.PendingTasks;
            this.TotalTasks = jsonData.TotalTasks;
         }
   }


   export class TaskListDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ToDoId: number;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      ClaimedNegotiator: Dezrez.Events.Query.ListNegotiatorDataContract;
      TaskInfo: Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToDoId = jsonData.ToDoId;
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
            this.StatusType = new Dezrez.System.EnumDataContract(jsonData.StatusType);
            this.ScheduleType = new Dezrez.System.EnumDataContract(jsonData.ScheduleType);
            this.ClaimedNegotiator = new Dezrez.Events.Query.ListNegotiatorDataContract(jsonData.ClaimedNegotiator);
            this.TaskInfo = new Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract(jsonData.TaskInfo);
         }
   }

}

export module Dezrez.Lists.Todos.Filter {

   export class TodoListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      FilterCategory: string;
      IncludeGlobal: boolean;
      OnlyGlobal: boolean;
      OwningNegotiatorId: number;
      NegotiatorIds: Array<number>;
      Statuses: Array<string>;
      ToDoTypes: Array<string>;
      Schedules: Array<string>;
      Priorities: Array<string>;
      Intervals: Array<string>;
      DateTo: DateHelper;
      DateFrom: DateHelper;
      Sort: Enums.TodoListSort;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.FilterCategory = jsonData.FilterCategory;
            this.IncludeGlobal = jsonData.IncludeGlobal;
            this.OnlyGlobal = jsonData.OnlyGlobal;
            this.OwningNegotiatorId = jsonData.OwningNegotiatorId;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.Statuses = (<string[]>jsonData.Statuses);
            this.ToDoTypes = (<string[]>jsonData.ToDoTypes);
            this.Schedules = (<string[]>jsonData.Schedules);
            this.Priorities = (<string[]>jsonData.Priorities);
            this.Intervals = (<string[]>jsonData.Intervals);
            this.DateTo = new DateHelper(jsonData.DateTo, null, true);
            this.DateFrom = new DateHelper(jsonData.DateFrom, null, true);
            this.Sort = <Enums.TodoListSort>(jsonData.Sort);
            this.AdditionalIds = (<number[]>jsonData.AdditionalIds);
            this.ExcludedIds = (<number[]>jsonData.ExcludedIds);
         }
   }


   export class TodoTaskListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      Statuses: Array<string>;
      Schedules: Array<string>;
      NegotiatorIds: Array<number>;
      TodoIds: Array<number>;
      Ids: Array<number>;
      DateFrom: DateHelper;
      DateTo: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Statuses = (<string[]>jsonData.Statuses);
            this.Schedules = (<string[]>jsonData.Schedules);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.TodoIds = (<number[]>jsonData.TodoIds);
            this.Ids = (<number[]>jsonData.Ids);
            this.DateFrom = new DateHelper(jsonData.DateFrom, null, true);
            this.DateTo = new DateHelper(jsonData.DateTo, null, true);
         }
   }


   export class SaveTodoListFilterDataContract extends Dezrez.Lists.Todos.Filter.TodoListFilterDataContract {
      FilterCategory: string;
      IncludeGlobal: boolean;
      OnlyGlobal: boolean;
      OwningNegotiatorId: number;
      NegotiatorIds: Array<number>;
      Statuses: Array<string>;
      ToDoTypes: Array<string>;
      Schedules: Array<string>;
      Priorities: Array<string>;
      Intervals: Array<string>;
      DateTo: DateHelper;
      DateFrom: DateHelper;
      Sort: Enums.TodoListSort;
      AdditionalIds: Array<number>;
      ExcludedIds: Array<number>;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }


   export class SaveTodoTaskListFilterDataContract extends Dezrez.Lists.Todos.Filter.TodoTaskListFilterDataContract {
      Statuses: Array<string>;
      Schedules: Array<string>;
      NegotiatorIds: Array<number>;
      TodoIds: Array<number>;
      Ids: Array<number>;
      DateFrom: DateHelper;
      DateTo: DateHelper;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }

}

export module Dezrez.Lists.Todos.TaskDetails {

   export class TaskInfoDataContract {
      Id: number;
      Name: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
         }
   }


   export class GeneralTaskInfoDataContract extends Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract {
      Id: number;
      Name: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class EventTaskInfoDataContract extends Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract {
      Id: number;
      Name: string;
      Description: string;
      EventId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventId = jsonData.EventId;
         }
   }


   export class GroupTaskInfoDataContract extends Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract {
      Id: number;
      Name: string;
      Description: string;
      GroupIcon: Dezrez.System.EnumDataContract;
      GroupId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
            this.GroupId = jsonData.GroupId;
         }
   }


   export class PropertyTaskInfoDataContract extends Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract {
      Id: number;
      Name: string;
      Description: string;
      Street: string;
      Number: string;
      City: string;
      PostCode: string;
      Image: string;
      PropertyId: number;
      RoleId: number;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Owners: Dezrez.Group.Query.Get.GroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Street = jsonData.Street;
            this.Number = jsonData.Number;
            this.City = jsonData.City;
            this.PostCode = jsonData.PostCode;
            this.Image = jsonData.Image;
            this.Description = jsonData.Description;
            this.PropertyId = jsonData.PropertyId;
            this.RoleId = jsonData.RoleId;
            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            this.Owners = new Dezrez.Group.Query.Get.GroupDataContract(jsonData.Owners);
         }
   }


   export class LeadTaskInfoDataContract extends Dezrez.Lists.Todos.TaskDetails.TaskInfoDataContract {
      Id: number;
      Name: string;
      Description: string;
      Lead: any;
      LeadGroup: Dezrez.Lists.Groups.GroupListPeopleGroupDataContract;
      PeopleGroup: Dezrez.Lists.Groups.GroupListPeopleGroupDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Lead = jsonData.Lead;
            this.LeadGroup = new Dezrez.Lists.Groups.GroupListPeopleGroupDataContract(jsonData.LeadGroup);
            this.PeopleGroup = new Dezrez.Lists.Groups.GroupListPeopleGroupDataContract(jsonData.PeopleGroup);
         }
   }

}

export module Dezrez.Lists.FollowUps.Filter {

   export class FollowUpListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      EventTypes: Array<string>;
      EventStatuses: Array<string>;
      RoleTypes: Array<string>;
      DateFrom: DateHelper;
      DateTo: DateHelper;
      OwningTeamIds: Array<number>;
      AttendingNegotiatorIds: Array<number>;
      AttendingGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventTypes = (<string[]>jsonData.EventTypes);
            this.EventStatuses = (<string[]>jsonData.EventStatuses);
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.DateFrom = new DateHelper(jsonData.DateFrom, null, true);
            this.DateTo = new DateHelper(jsonData.DateTo, null, true);
            this.OwningTeamIds = (<number[]>jsonData.OwningTeamIds);
            this.AttendingNegotiatorIds = (<number[]>jsonData.AttendingNegotiatorIds);
            this.AttendingGroupIds = (<number[]>jsonData.AttendingGroupIds);
         }
   }


   export class SaveFollowUpListFilterDataContract extends Dezrez.Lists.FollowUps.Filter.FollowUpListFilterDataContract {
      EventTypes: Array<string>;
      EventStatuses: Array<string>;
      RoleTypes: Array<string>;
      DateFrom: DateHelper;
      DateTo: DateHelper;
      OwningTeamIds: Array<number>;
      AttendingNegotiatorIds: Array<number>;
      AttendingGroupIds: Array<number>;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }


   export class FeedbackFollowUpListFilterDataContract extends Dezrez.Lists.BaseListFilterDataContract {
      Name: string;
      CustomFilterConfig: string;
      BranchId: number;
      Order: Enums.ListOrder;
      SearchTerm: string;
      FilterType: Dezrez.System.EnumDataContract;
      ShowDeleted: boolean;
      EventTypes: Array<string>;
      RoleTypes: Array<string>;
      DateFrom: DateHelper;
      DateTo: DateHelper;
      OwningTeamIds: Array<number>;
      AttendingNegotiatorIds: Array<number>;
      AttendingGroupIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventTypes = (<string[]>jsonData.EventTypes);
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.DateFrom = new DateHelper(jsonData.DateFrom, null, true);
            this.DateTo = new DateHelper(jsonData.DateTo, null, true);
            this.OwningTeamIds = (<number[]>jsonData.OwningTeamIds);
            this.AttendingNegotiatorIds = (<number[]>jsonData.AttendingNegotiatorIds);
            this.AttendingGroupIds = (<number[]>jsonData.AttendingGroupIds);
         }
   }


   export class SaveFeedbackFollowUpListFilterDataContract extends Dezrez.Lists.FollowUps.Filter.FeedbackFollowUpListFilterDataContract {
      EventTypes: Array<string>;
      RoleTypes: Array<string>;
      DateFrom: DateHelper;
      DateTo: DateHelper;
      OwningTeamIds: Array<number>;
      AttendingNegotiatorIds: Array<number>;
      AttendingGroupIds: Array<number>;
      Context: Enums.ListContext;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Context = <Enums.ListContext>(jsonData.Context);
         }
   }

}

export module Dezrez.Lists.FollowUps {

   export class FollowUpListDataContract {
      Group: Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupResultDataContract;
      Events: Array<Dezrez.Lists.Events.EventListDataContract>;
      Attendees: Array<Dezrez.Lists.Events.EventListAttendeeCollectionDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Group = new Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupResultDataContract(jsonData.Group);
            var eventsTempArray = _.map(jsonData.Events, item => { return new Dezrez.Lists.Events.EventListDataContract(item);  });
            this.Events = <Dezrez.Lists.Events.EventListDataContract[]>eventsTempArray;

            var attendeesTempArray = _.map(jsonData.Attendees, item => { return new Dezrez.Lists.Events.EventListAttendeeCollectionDataContract(item);  });
            this.Attendees = <Dezrez.Lists.Events.EventListAttendeeCollectionDataContract[]>attendeesTempArray;

         }
   }


   export class FeedbackFollowUpListDataContract {
      Group: Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupResultDataContract;
      Events: Array<Dezrez.Lists.Events.EventListDataContract>;
      Attendees: Array<Dezrez.Lists.Events.EventListAttendeeCollectionDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Group = new Dezrez.GlobalSearch.Query.Groups.GlobalSearchGroupResultDataContract(jsonData.Group);
            var eventsTempArray = _.map(jsonData.Events, item => { return new Dezrez.Lists.Events.EventListDataContract(item);  });
            this.Events = <Dezrez.Lists.Events.EventListDataContract[]>eventsTempArray;

            var attendeesTempArray = _.map(jsonData.Attendees, item => { return new Dezrez.Lists.Events.EventListAttendeeCollectionDataContract(item);  });
            this.Attendees = <Dezrez.Lists.Events.EventListAttendeeCollectionDataContract[]>attendeesTempArray;

         }
   }

}

export module Dezrez.Core.DataContracts.External {

   export class SecurityAwareLink {
      LinkText: string;
      LinkAddress: string;
      RequiresAuthentication: boolean;
      OpenInNewTab: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.LinkText = jsonData.LinkText;
            this.LinkAddress = jsonData.LinkAddress;
            this.RequiresAuthentication = jsonData.RequiresAuthentication;
            this.OpenInNewTab = jsonData.OpenInNewTab;
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService {

   export class NotificationServiceMessageBase {
      MessageType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.MessageType = jsonData.MessageType;
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService.EntityChange {

   export class AppointmentChangeNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      ChangeType: string;
      AppointmentDetails: Dezrez.Events.Appointments.Query.AppointmentSummaryDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ChangeType = jsonData.ChangeType;
            this.AppointmentDetails = new Dezrez.Events.Appointments.Query.AppointmentSummaryDataContract(jsonData.AppointmentDetails);
            this.MessageType = jsonData.MessageType;
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService.UserNotification.Job {

   export class JobStatusNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      JobReference: any;
      JobStatusText: string;
      JobStatus: string;
      JobPercentageCompleted: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.JobReference = jsonData.JobReference;
            this.JobStatusText = jsonData.JobStatusText;
            this.JobStatus = jsonData.JobStatus;
            this.JobPercentageCompleted = jsonData.JobPercentageCompleted;
            this.MessageType = jsonData.MessageType;
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService.UserNotification {

   export class PortalRepsonseNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      IsSuccess: boolean;
      Description: string;
      Portal: Dezrez.Portals.PortalDataContract;
      Errors: Array<Dezrez.Portals.PortalFeedbackItem>;
      Warnings: Array<Dezrez.Portals.PortalFeedbackItem>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.IsSuccess = jsonData.IsSuccess;
            this.Description = jsonData.Description;
            this.Portal = new Dezrez.Portals.PortalDataContract(jsonData.Portal);
            var errorsTempArray = _.map(jsonData.Errors, item => { return new Dezrez.Portals.PortalFeedbackItem(item);  });
            this.Errors = <Dezrez.Portals.PortalFeedbackItem[]>errorsTempArray;

            var warningsTempArray = _.map(jsonData.Warnings, item => { return new Dezrez.Portals.PortalFeedbackItem(item);  });
            this.Warnings = <Dezrez.Portals.PortalFeedbackItem[]>warningsTempArray;

            this.MessageType = jsonData.MessageType;
         }
   }


   export class SystemAlertNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      NotificationTitle: string;
      MessageContent: string;
      AssociatedLinks: Array<Dezrez.Core.DataContracts.External.SecurityAwareLink>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NotificationTitle = jsonData.NotificationTitle;
            this.MessageContent = jsonData.MessageContent;
            this.MessageType = jsonData.MessageType;
            var associatedLinksTempArray = _.map(jsonData.AssociatedLinks, item => { return new Dezrez.Core.DataContracts.External.SecurityAwareLink(item);  });
            this.AssociatedLinks = <Dezrez.Core.DataContracts.External.SecurityAwareLink[]>associatedLinksTempArray;

         }
   }


   export class UserNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      NotificationTitle: string;
      MessageContent: string;
      AssociatedLinks: Array<Dezrez.Core.DataContracts.External.SecurityAwareLink>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.NotificationTitle = jsonData.NotificationTitle;
            this.MessageContent = jsonData.MessageContent;
            var associatedLinksTempArray = _.map(jsonData.AssociatedLinks, item => { return new Dezrez.Core.DataContracts.External.SecurityAwareLink(item);  });
            this.AssociatedLinks = <Dezrez.Core.DataContracts.External.SecurityAwareLink[]>associatedLinksTempArray;

            this.MessageType = jsonData.MessageType;
         }
   }


   export class UserStatusChangeNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      Username: string;
      PersonId: number;
      OldState: string;
      NewState: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Username = jsonData.Username;
            this.PersonId = jsonData.PersonId;
            this.OldState = jsonData.OldState;
            this.NewState = jsonData.NewState;
            this.MessageType = jsonData.MessageType;
         }
   }


   export class CorrespondenceGeneratedNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      SackTitle: string;
      SackId: string;
      EnvelopeCount: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.SackTitle = jsonData.SackTitle;
            this.SackId = jsonData.SackId;
            this.EnvelopeCount = jsonData.EnvelopeCount;
            this.MessageType = jsonData.MessageType;
         }
   }


   export class PrintJobNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      Total: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Total = jsonData.Total;
            this.MessageType = jsonData.MessageType;
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService.UserNotification.Chat {

   export class ChatMessageChangeNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      Id: string;
      DateTimeCreated: DateHelper;
      MessageStatus: string;
      NegotiatorId: number;
      NegotiatorName: string;
      Comments: Array<Dezrez.Chat.ChatMessageCommentDataContract>;
      Recipients: Array<Dezrez.Chat.ChatMessageUserDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Id = jsonData.Id;
            this.DateTimeCreated = new DateHelper(jsonData.DateTimeCreated, null, true);
            this.MessageStatus = jsonData.MessageStatus;
            this.NegotiatorId = jsonData.NegotiatorId;
            this.NegotiatorName = jsonData.NegotiatorName;
            var commentsTempArray = _.map(jsonData.Comments, item => { return new Dezrez.Chat.ChatMessageCommentDataContract(item);  });
            this.Comments = <Dezrez.Chat.ChatMessageCommentDataContract[]>commentsTempArray;

            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.Chat.ChatMessageUserDataContract(item);  });
            this.Recipients = <Dezrez.Chat.ChatMessageUserDataContract[]>recipientsTempArray;

         }
   }

}

export module Dezrez.Reminders.Command {

   export class SetReminderCommandDataContract {
      Title: string;
      Date: DateHelper;
      Type: Dezrez.System.EnumDataContract;
      Priority: Dezrez.System.EnumDataContract;
      SnoozeCount: number;
      Data: any;
      ReferenceDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Title = jsonData.Title;
            this.Date = new DateHelper(jsonData.Date, null, true);
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.Priority = new Dezrez.System.EnumDataContract(jsonData.Priority);
            this.SnoozeCount = jsonData.SnoozeCount;
            this.Data = jsonData.Data;
            this.ReferenceDate = new DateHelper(jsonData.ReferenceDate, null, true);
         }
   }

}

export module Dezrez.Email.Command {

   export class MailSyncDataContract {
      SyncFromDate: DateHelper;
      ExtractInlineImages: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.SyncFromDate = new DateHelper(jsonData.SyncFromDate, null, true);
            this.ExtractInlineImages = jsonData.ExtractInlineImages;
         }
   }

}

export module Dezrez.Email.Query {

   export class EmailSummaryDataContact {
      Subject: string;
      From: string;
      To: string;
      Sent: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Subject = jsonData.Subject;
            this.From = jsonData.From;
            this.To = jsonData.To;
            this.Sent = new DateHelper(jsonData.Sent, null, true);
         }
   }


   export class MailSyncEnabledDataContract {
      Enabled: boolean;
      SyncFromDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Enabled = jsonData.Enabled;
            this.SyncFromDate = new DateHelper(jsonData.SyncFromDate, null, true);
         }
   }

}

export module Dezrez.Progression.Query {

   export class ProgressionMilestoneDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      MilestoneStatus: Dezrez.System.EnumDataContract;
      MilestoneLeaseType: Dezrez.System.EnumDataContract;
      MilestoneRoleType: Dezrez.System.EnumDataContract;
      MilestoneCategory: Dezrez.System.EnumDataContract;
      TargetDate: DateHelper;
      CompletedDate: DateHelper;
      CompletedBy: Dezrez.Agency.Query.Teams.TeamDataContract;
      OwningTeam: Dezrez.Agency.Query.Teams.TeamDataContract;
      OwningNegotiator: Dezrez.Negotiators.Query.Get.NegotiatorDataContract;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public roomImageDataContract: Dezrez.Descriptions.Query.RoomImageDataContract;
      get RoomImageDataContractData(): Dezrez.Descriptions.Query.RoomImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roomImageDataContract || (this.roomImageDataContract = this.getType<Dezrez.Descriptions.Query.RoomImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoomImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letterTemplateDataContract: Dezrez.DocumentGeneration.Query.LetterTemplateDataContract;
      get LetterTemplateDataContractData(): Dezrez.DocumentGeneration.Query.LetterTemplateDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.letterTemplateDataContract || (this.letterTemplateDataContract = this.getType<Dezrez.DocumentGeneration.Query.LetterTemplateDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetterTemplateDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrdered: Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract;
      get RoleOrderedData(): Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrdered || (this.roleOrdered = this.getType<Dezrez.Role.Query.Documents.RoleOrderedDocumentDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrdered";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public roleOrderedImageDataContract: Dezrez.Role.Query.Images.RoleOrderedImageDataContract;
      get RoleOrderedImageDataContractData(): Dezrez.Role.Query.Images.RoleOrderedImageDataContract {
         if (this.Documents && this.Documents.length) {
            return (this.roleOrderedImageDataContract || (this.roleOrderedImageDataContract = this.getType<Dezrez.Role.Query.Images.RoleOrderedImageDataContract>(this.Documents, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RoleOrderedImageDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      Contacts: Array<Dezrez.Progression.Query.ProgressionContactDataContact>;
      Notes: Array<Dezrez.Events.Query.EventDataContract>;

      public noteDataContract: Dezrez.Events.Query.NoteDataContract;
      get NoteDataContractData(): Dezrez.Events.Query.NoteDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.noteDataContract || (this.noteDataContract = this.getType<Dezrez.Events.Query.NoteDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "NoteDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public appointmentDataContract: Dezrez.Events.Appointments.Query.AppointmentDataContract;
      get AppointmentDataContractData(): Dezrez.Events.Appointments.Query.AppointmentDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.appointmentDataContract || (this.appointmentDataContract = this.getType<Dezrez.Events.Appointments.Query.AppointmentDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "AppointmentDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public auctionDataContract: Dezrez.Events.Appointments.Query.AuctionDataContract;
      get AuctionDataContractData(): Dezrez.Events.Appointments.Query.AuctionDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.auctionDataContract || (this.auctionDataContract = this.getType<Dezrez.Events.Appointments.Query.AuctionDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "AuctionDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public valuationDataContract: Dezrez.Events.Appointments.Query.ValuationDataContract;
      get ValuationDataContractData(): Dezrez.Events.Appointments.Query.ValuationDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.valuationDataContract || (this.valuationDataContract = this.getType<Dezrez.Events.Appointments.Query.ValuationDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ValuationDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public taskDataContract: Dezrez.Events.Task.Query.TaskDataContract;
      get TaskDataContractData(): Dezrez.Events.Task.Query.TaskDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.taskDataContract || (this.taskDataContract = this.getType<Dezrez.Events.Task.Query.TaskDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "TaskDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public telephoneCallDataContract: Dezrez.Events.Task.Query.TelephoneCallDataContract;
      get TelephoneCallDataContractData(): Dezrez.Events.Task.Query.TelephoneCallDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.telephoneCallDataContract || (this.telephoneCallDataContract = this.getType<Dezrez.Events.Task.Query.TelephoneCallDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "TelephoneCallDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public writeupDataContract: Dezrez.Events.Task.Query.WriteupDataContract;
      get WriteupDataContractData(): Dezrez.Events.Task.Query.WriteupDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.writeupDataContract || (this.writeupDataContract = this.getType<Dezrez.Events.Task.Query.WriteupDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "WriteupDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public boardRequestDataContract: Dezrez.Events.Task.Query.BoardRequestDataContract;
      get BoardRequestDataContractData(): Dezrez.Events.Task.Query.BoardRequestDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.boardRequestDataContract || (this.boardRequestDataContract = this.getType<Dezrez.Events.Task.Query.BoardRequestDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "BoardRequestDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public mailMergeScheduled: Dezrez.Events.ScheduledEvents.Query.MailMergeScheduledEventDataContract;
      get MailMergeScheduledData(): Dezrez.Events.ScheduledEvents.Query.MailMergeScheduledEventDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.mailMergeScheduled || (this.mailMergeScheduled = this.getType<Dezrez.Events.ScheduledEvents.Query.MailMergeScheduledEventDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MailMergeScheduled";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public viewingFeedbackCommunicationDataContract: Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackCommunicationDataContract;
      get ViewingFeedbackCommunicationDataContractData(): Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackCommunicationDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.viewingFeedbackCommunicationDataContract || (this.viewingFeedbackCommunicationDataContract = this.getType<Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackCommunicationDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ViewingFeedbackCommunicationDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public viewingFeedbackDataContract: Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackDataContract;
      get ViewingFeedbackDataContractData(): Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.viewingFeedbackDataContract || (this.viewingFeedbackDataContract = this.getType<Dezrez.Events.Appointments.Query.Viewing.ViewingFeedbackDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ViewingFeedbackDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public viewingDataContract: Dezrez.Events.Appointments.Query.Viewing.ViewingDataContract;
      get ViewingDataContractData(): Dezrez.Events.Appointments.Query.Viewing.ViewingDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.viewingDataContract || (this.viewingDataContract = this.getType<Dezrez.Events.Appointments.Query.Viewing.ViewingDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ViewingDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public valuationFeedbackCommunicationDataContract: Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackCommunicationDataContract;
      get ValuationFeedbackCommunicationDataContractData(): Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackCommunicationDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.valuationFeedbackCommunicationDataContract || (this.valuationFeedbackCommunicationDataContract = this.getType<Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackCommunicationDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ValuationFeedbackCommunicationDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public valuationFeedbackDataContract: Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackDataContract;
      get ValuationFeedbackDataContractData(): Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.valuationFeedbackDataContract || (this.valuationFeedbackDataContract = this.getType<Dezrez.Events.Appointments.Query.Valuation.ValuationFeedbackDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ValuationFeedbackDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public multiViewingDataContract: Dezrez.Events.Appointments.Query.Viewing.MultiViewing.MultiViewingDataContract;
      get MultiViewingDataContractData(): Dezrez.Events.Appointments.Query.Viewing.MultiViewing.MultiViewingDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.multiViewingDataContract || (this.multiViewingDataContract = this.getType<Dezrez.Events.Appointments.Query.Viewing.MultiViewing.MultiViewingDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "MultiViewingDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public progressionDataContract: Dezrez.Events.Progression.Query.ProgressionDataContract;
      get ProgressionDataContractData(): Dezrez.Events.Progression.Query.ProgressionDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.progressionDataContract || (this.progressionDataContract = this.getType<Dezrez.Events.Progression.Query.ProgressionDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ProgressionDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public fallenThroughDataContract: Dezrez.Events.Progression.Query.FallenThroughDataContract;
      get FallenThroughDataContractData(): Dezrez.Events.Progression.Query.FallenThroughDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.fallenThroughDataContract || (this.fallenThroughDataContract = this.getType<Dezrez.Events.Progression.Query.FallenThroughDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "FallenThroughDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public completedDataContract: Dezrez.Events.Progression.Query.CompletedDataContract;
      get CompletedDataContractData(): Dezrez.Events.Progression.Query.CompletedDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.completedDataContract || (this.completedDataContract = this.getType<Dezrez.Events.Progression.Query.CompletedDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "CompletedDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public exchangedDataContract: Dezrez.Events.Progression.Query.ExchangedDataContract;
      get ExchangedDataContractData(): Dezrez.Events.Progression.Query.ExchangedDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.exchangedDataContract || (this.exchangedDataContract = this.getType<Dezrez.Events.Progression.Query.ExchangedDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ExchangedDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public instructionToSellDataContract: Dezrez.Events.Progression.Query.InstructionToSellDataContract;
      get InstructionToSellDataContractData(): Dezrez.Events.Progression.Query.InstructionToSellDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.instructionToSellDataContract || (this.instructionToSellDataContract = this.getType<Dezrez.Events.Progression.Query.InstructionToSellDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "InstructionToSellDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public preValuationDataContract: Dezrez.Events.Progression.Query.PreValuationDataContract;
      get PreValuationDataContractData(): Dezrez.Events.Progression.Query.PreValuationDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.preValuationDataContract || (this.preValuationDataContract = this.getType<Dezrez.Events.Progression.Query.PreValuationDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PreValuationDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public valuedDataContract: Dezrez.Events.Progression.Query.ValuedDataContract;
      get ValuedDataContractData(): Dezrez.Events.Progression.Query.ValuedDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.valuedDataContract || (this.valuedDataContract = this.getType<Dezrez.Events.Progression.Query.ValuedDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "ValuedDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public priceChangeDataContract: Dezrez.Events.Progression.Query.PriceChangeDataContract;
      get PriceChangeDataContractData(): Dezrez.Events.Progression.Query.PriceChangeDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.priceChangeDataContract || (this.priceChangeDataContract = this.getType<Dezrez.Events.Progression.Query.PriceChangeDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PriceChangeDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public instructionToLetDataContract: Dezrez.Events.Progression.Query.InstructionToLetDataContract;
      get InstructionToLetDataContractData(): Dezrez.Events.Progression.Query.InstructionToLetDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.instructionToLetDataContract || (this.instructionToLetDataContract = this.getType<Dezrez.Events.Progression.Query.InstructionToLetDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "InstructionToLetDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public letDataContract: Dezrez.Events.Progression.Query.LetDataContract;
      get LetDataContractData(): Dezrez.Events.Progression.Query.LetDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.letDataContract || (this.letDataContract = this.getType<Dezrez.Events.Progression.Query.LetDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LetDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public remarketDataContract: Dezrez.Events.Progression.Query.RemarketDataContract;
      get RemarketDataContractData(): Dezrez.Events.Progression.Query.RemarketDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.remarketDataContract || (this.remarketDataContract = this.getType<Dezrez.Events.Progression.Query.RemarketDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "RemarketDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public offerDataContract: Dezrez.Events.Progression.Query.Offer.OfferDataContract;
      get OfferDataContractData(): Dezrez.Events.Progression.Query.Offer.OfferDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.offerDataContract || (this.offerDataContract = this.getType<Dezrez.Events.Progression.Query.Offer.OfferDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "OfferDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public offerResponseDataContract: Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract;
      get OfferResponseDataContractData(): Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.offerResponseDataContract || (this.offerResponseDataContract = this.getType<Dezrez.Events.Progression.Query.Offer.OfferResponseDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "OfferResponseDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public lettingOfferDataContract: Dezrez.Events.Progression.Query.Offer.LettingOfferDataContract;
      get LettingOfferDataContractData(): Dezrez.Events.Progression.Query.Offer.LettingOfferDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.lettingOfferDataContract || (this.lettingOfferDataContract = this.getType<Dezrez.Events.Progression.Query.Offer.LettingOfferDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "LettingOfferDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupOfferDataContract: Dezrez.Group.Query.OffersMadeReceived.GroupOfferDataContract;
      get GroupOfferDataContractData(): Dezrez.Group.Query.OffersMadeReceived.GroupOfferDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.groupOfferDataContract || (this.groupOfferDataContract = this.getType<Dezrez.Group.Query.OffersMadeReceived.GroupOfferDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupOfferDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupOfferResponseDataContract: Dezrez.Group.Query.OffersMadeReceived.GroupOfferResponseDataContract;
      get GroupOfferResponseDataContractData(): Dezrez.Group.Query.OffersMadeReceived.GroupOfferResponseDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.groupOfferResponseDataContract || (this.groupOfferResponseDataContract = this.getType<Dezrez.Group.Query.OffersMadeReceived.GroupOfferResponseDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupOfferResponseDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupLettingOfferDataContract: Dezrez.Group.Query.OffersMadeReceived.GroupLettingOfferDataContract;
      get GroupLettingOfferDataContractData(): Dezrez.Group.Query.OffersMadeReceived.GroupLettingOfferDataContract {
         if (this.Notes && this.Notes.length) {
            return (this.groupLettingOfferDataContract || (this.groupLettingOfferDataContract = this.getType<Dezrez.Group.Query.OffersMadeReceived.GroupLettingOfferDataContract>(this.Notes, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupLettingOfferDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.MilestoneStatus = new Dezrez.System.EnumDataContract(jsonData.MilestoneStatus);
            this.MilestoneLeaseType = new Dezrez.System.EnumDataContract(jsonData.MilestoneLeaseType);
            this.MilestoneRoleType = new Dezrez.System.EnumDataContract(jsonData.MilestoneRoleType);
            this.MilestoneCategory = new Dezrez.System.EnumDataContract(jsonData.MilestoneCategory);
            this.TargetDate = new DateHelper(jsonData.TargetDate, null, true);
            this.CompletedDate = new DateHelper(jsonData.CompletedDate, null, true);
            this.CompletedBy = new Dezrez.Agency.Query.Teams.TeamDataContract(jsonData.CompletedBy);
            this.OwningTeam = new Dezrez.Agency.Query.Teams.TeamDataContract(jsonData.OwningTeam);
            this.OwningNegotiator = new Dezrez.Negotiators.Query.Get.NegotiatorDataContract(jsonData.OwningNegotiator);
            var documentsTempArray = _.map(jsonData.Documents, (item: any) => {
               return new Dezrez.Media.DocumentDataContract(item);
            });
            this.Documents = <Dezrez.Media.DocumentDataContract[]>documentsTempArray;

            var contactsTempArray = _.map(jsonData.Contacts, item => { return new Dezrez.Progression.Query.ProgressionContactDataContact(item);  });
            this.Contacts = <Dezrez.Progression.Query.ProgressionContactDataContact[]>contactsTempArray;

            var notesTempArray = _.map(jsonData.Notes, (item: any) => {
               return new Dezrez.Events.Query.EventDataContract(item);
            });
            this.Notes = <Dezrez.Events.Query.EventDataContract[]>notesTempArray;

         }
   }


   export class ProgressionMilestonesConfigurationDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Milestones: Array<Dezrez.Progression.Query.ProgressionMilestoneDataContract>;
      MilestonesConfigurationLeaseType: Dezrez.System.EnumDataContract;
      MilestonesConfigurationRoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            var milestonesTempArray = _.map(jsonData.Milestones, item => { return new Dezrez.Progression.Query.ProgressionMilestoneDataContract(item);  });
            this.Milestones = <Dezrez.Progression.Query.ProgressionMilestoneDataContract[]>milestonesTempArray;

            this.MilestonesConfigurationLeaseType = new Dezrez.System.EnumDataContract(jsonData.MilestonesConfigurationLeaseType);
            this.MilestonesConfigurationRoleType = new Dezrez.System.EnumDataContract(jsonData.MilestonesConfigurationRoleType);
         }
   }


   export class ProgressionContactDataContact extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      ProgressionRoleType: Dezrez.System.EnumDataContract;
      CaseHandler: Dezrez.People.Query.Get.PersonDataContract;
      CaseNumber: string;
      GroupId: number;
      GroupName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.ProgressionRoleType = new Dezrez.System.EnumDataContract(jsonData.ProgressionRoleType);
            this.CaseHandler = new Dezrez.People.Query.Get.PersonDataContract(jsonData.CaseHandler);
            this.CaseNumber = jsonData.CaseNumber;
            this.GroupId = jsonData.GroupId;
            this.GroupName = jsonData.GroupName;
         }
   }


   export class ProgressionMilestonesSummaryDataContract {
      VendorCompletedCount: number;
      VendorPendingCount: number;
      VendorBlockedCount: number;
      PurchaserCompletedCount: number;
      PurchaserPendingCount: number;
      PurchaserBlockedCount: number;
      TenantCompletedCount: number;
      TenantPendingCount: number;
      TenantBlockedCount: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.VendorCompletedCount = jsonData.VendorCompletedCount;
            this.VendorPendingCount = jsonData.VendorPendingCount;
            this.VendorBlockedCount = jsonData.VendorBlockedCount;
            this.PurchaserCompletedCount = jsonData.PurchaserCompletedCount;
            this.PurchaserPendingCount = jsonData.PurchaserPendingCount;
            this.PurchaserBlockedCount = jsonData.PurchaserBlockedCount;
            this.TenantCompletedCount = jsonData.TenantCompletedCount;
            this.TenantPendingCount = jsonData.TenantPendingCount;
            this.TenantBlockedCount = jsonData.TenantBlockedCount;
         }
   }

}

export module Dezrez.Progression.Command {

   export class RemoveProgressionContactDataContract {
      ProgressionContactId: number;
      ProgressionRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ProgressionContactId = jsonData.ProgressionContactId;
            this.ProgressionRoleId = jsonData.ProgressionRoleId;
         }
   }


   export class SaveProgressionContactDataContract {
      ProgressionContactId: number;
      ProgressionRoleId: number;
      GroupId: number;
      PersonId: number;
      CaseNumber: string;
      ProgressionRoleType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ProgressionContactId = jsonData.ProgressionContactId;
            this.ProgressionRoleId = jsonData.ProgressionRoleId;
            this.GroupId = jsonData.GroupId;
            this.PersonId = jsonData.PersonId;
            this.CaseNumber = jsonData.CaseNumber;
            this.ProgressionRoleType = new Dezrez.System.EnumDataContract(jsonData.ProgressionRoleType);
         }
   }


   export class SaveProgressionMilestoneDataContract extends Dezrez.Progression.Query.ProgressionMilestoneDataContract {
      Name: string;
      MilestoneStatus: Dezrez.System.EnumDataContract;
      MilestoneLeaseType: Dezrez.System.EnumDataContract;
      MilestoneRoleType: Dezrez.System.EnumDataContract;
      MilestoneCategory: Dezrez.System.EnumDataContract;
      TargetDate: DateHelper;
      CompletedDate: DateHelper;
      CompletedBy: Dezrez.Agency.Query.Teams.TeamDataContract;
      OwningTeam: Dezrez.Agency.Query.Teams.TeamDataContract;
      OwningNegotiator: Dezrez.Negotiators.Query.Get.NegotiatorDataContract;
      Documents: Array<Dezrez.Media.DocumentDataContract>;

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      Contacts: Array<Dezrez.Progression.Query.ProgressionContactDataContact>;
      Notes: Array<Dezrez.Events.Query.EventDataContract>;

      ProgressionRoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ProgressionRoleId = jsonData.ProgressionRoleId;
         }
   }

}

export module Dezrez.Calendar.Command {

   export class CalendarSyncResyncDataContract {
      NegotiatorId: number;
      UniqueIdentifier: string;
      ChangedSince: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.NegotiatorId = jsonData.NegotiatorId;
            this.UniqueIdentifier = jsonData.UniqueIdentifier;
            this.ChangedSince = new DateHelper(jsonData.ChangedSince, null, true);
         }
   }

}

export module Dezrez.Credentials.Command {

   export class UsernamePasswordCredentialDataContract {
      Name: string;
      Username: string;
      Password: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Username = jsonData.Username;
            this.Password = jsonData.Password;
         }
   }

}

export module Dezrez.Workflow {

   export class WorkflowTriggerDescriptionDataContract {
      TriggerSystemName: string;
      TriggerDescription: string;
      TriggerProperties: Array<Dezrez.Workflow.WorkflowTriggerContentPropertyDescriptionDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TriggerSystemName = jsonData.TriggerSystemName;
            this.TriggerDescription = jsonData.TriggerDescription;
            var triggerPropertiesTempArray = _.map(jsonData.TriggerProperties, item => { return new Dezrez.Workflow.WorkflowTriggerContentPropertyDescriptionDataContract(item);  });
            this.TriggerProperties = <Dezrez.Workflow.WorkflowTriggerContentPropertyDescriptionDataContract[]>triggerPropertiesTempArray;

         }
   }


   export class WorkflowTriggerContentPropertyDescriptionDataContract {
      ContentPropertyName: string;
      ContentPropertyDataType: string;
      IsPropertyFilter: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ContentPropertyName = jsonData.ContentPropertyName;
            this.ContentPropertyDataType = jsonData.ContentPropertyDataType;
            this.IsPropertyFilter = jsonData.IsPropertyFilter;
         }
   }


   export class WorkflowInstanceMappedVariableDataContract {
      Name: string;
      Value: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }


   export class WorkflowDescriptionDataContract {
      DisplayName: string;
      Description: string;
      TriggerType: string;
      PublishedBy: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.DisplayName = jsonData.DisplayName;
            this.Description = jsonData.Description;
            this.TriggerType = jsonData.TriggerType;
            this.PublishedBy = jsonData.PublishedBy;
         }
   }


   export class WorkflowInstanceDataContract {
      WorkflowName: string;
      WorkflowState: string;
      WorkflowDetailedStatus: string;
      InstanceHandle: string;
      UserStatus: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.WorkflowName = jsonData.WorkflowName;
            this.WorkflowState = jsonData.WorkflowState;
            this.WorkflowDetailedStatus = jsonData.WorkflowDetailedStatus;
            this.InstanceHandle = jsonData.InstanceHandle;
            this.UserStatus = jsonData.UserStatus;
         }
   }


   export class WorkflowParameterDataContract {
      Name: string;
      Value: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }

}

export module Dezrez.Workflow.Command {

   export class FireExternalWorkflowTriggerCommandDataContract {
      Origin: string;
      TriggerType: string;
      Properties: Array<Dezrez.Workflow.WorkflowParameterDataContract>;
      Content: Array<Dezrez.Workflow.WorkflowParameterDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Origin = jsonData.Origin;
            this.TriggerType = jsonData.TriggerType;
            var propertiesTempArray = _.map(jsonData.Properties, item => { return new Dezrez.Workflow.WorkflowParameterDataContract(item);  });
            this.Properties = <Dezrez.Workflow.WorkflowParameterDataContract[]>propertiesTempArray;

            var contentTempArray = _.map(jsonData.Content, item => { return new Dezrez.Workflow.WorkflowParameterDataContract(item);  });
            this.Content = <Dezrez.Workflow.WorkflowParameterDataContract[]>contentTempArray;

         }
   }


   export class InvokeWorkflowCommandDataContract {
      WorkflowName: string;
      Parameters: Array<Dezrez.Workflow.WorkflowParameterDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.WorkflowName = jsonData.WorkflowName;
            var parametersTempArray = _.map(jsonData.Parameters, item => { return new Dezrez.Workflow.WorkflowParameterDataContract(item);  });
            this.Parameters = <Dezrez.Workflow.WorkflowParameterDataContract[]>parametersTempArray;

         }
   }

}

export module Dezrez.Reminders.Query {

   export class BaseReminderDataContract extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      Title: string;
      Date: DateHelper;
      Priority: Dezrez.System.EnumDataContract;
      SnoozeCount: number;
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.Date = new DateHelper(jsonData.Date, null, true);
            this.Priority = new Dezrez.System.EnumDataContract(jsonData.Priority);
            this.SnoozeCount = jsonData.SnoozeCount;
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }


   export class AppointmentReminderDataContract extends Dezrez.Reminders.Query.BaseReminderDataContract {
      Title: string;
      Date: DateHelper;
      Priority: Dezrez.System.EnumDataContract;
      SnoozeCount: number;
      NegotiatorId: number;
      AppointmentId: number;
      AppointmentLastUpdated: DateHelper;
      AppointmentStartDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.AppointmentId = jsonData.AppointmentId;
            this.AppointmentLastUpdated = new DateHelper(jsonData.AppointmentLastUpdated, null, true);
            this.AppointmentStartDate = new DateHelper(jsonData.AppointmentStartDate, null, true);
         }
   }


   export class MilestoneReminderDataContract extends Dezrez.Reminders.Query.BaseReminderDataContract {
      Title: string;
      Date: DateHelper;
      Priority: Dezrez.System.EnumDataContract;
      SnoozeCount: number;
      NegotiatorId: number;
      MarketingSalesRoleId: number;
      ProgressionRoleId: number;
      ProgressionMilestoneId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MarketingSalesRoleId = jsonData.MarketingSalesRoleId;
            this.ProgressionRoleId = jsonData.ProgressionRoleId;
            this.ProgressionMilestoneId = jsonData.ProgressionMilestoneId;
         }
   }


   export class TaskReminderDataContract extends Dezrez.Reminders.Query.BaseReminderDataContract {
      Title: string;
      Date: DateHelper;
      Priority: Dezrez.System.EnumDataContract;
      SnoozeCount: number;
      NegotiatorId: number;
      TaskId: number;
      TodoId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TaskId = jsonData.TaskId;
            this.TodoId = jsonData.TodoId;
         }
   }

}

export module Dezrez.ToDo.Command {

   export class SaveToDoCommandDataContract {
      Id: number;
      ToDoOwner: number;
      Interval: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      DueDate: DateHelper;
      Title: string;
      Description: string;
      Priority: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.ToDoOwner = jsonData.ToDoOwner;
            this.Interval = new Dezrez.System.EnumDataContract(jsonData.Interval);
            this.ScheduleType = new Dezrez.System.EnumDataContract(jsonData.ScheduleType);
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.Priority = new Dezrez.System.EnumDataContract(jsonData.Priority);
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class GroupRecipientToDoCommandDataContract {
      GroupId: number;
      PersonIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.GroupId = jsonData.GroupId;
            this.PersonIds = (<number[]>jsonData.PersonIds);
         }
   }


   export class SaveGeneralToDoCommandDataContract extends Dezrez.ToDo.Command.SaveToDoCommandDataContract {
      Id: number;
      ToDoOwner: number;
      Interval: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      DueDate: DateHelper;
      Title: string;
      Description: string;
      Priority: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }


   export class SaveGroupToDoCommandDataContract extends Dezrez.ToDo.Command.SaveToDoCommandDataContract {
      Id: number;
      ToDoOwner: number;
      Interval: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      DueDate: DateHelper;
      Title: string;
      Description: string;
      Priority: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      Recipients: Array<Dezrez.ToDo.Command.GroupRecipientToDoCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.ToDo.Command.GroupRecipientToDoCommandDataContract(item);  });
            this.Recipients = <Dezrez.ToDo.Command.GroupRecipientToDoCommandDataContract[]>recipientsTempArray;

         }
   }


   export class SavePropertyToDoCommandDataContract extends Dezrez.ToDo.Command.SaveToDoCommandDataContract {
      Id: number;
      ToDoOwner: number;
      Interval: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      DueDate: DateHelper;
      Title: string;
      Description: string;
      Priority: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      PropertyMarketingRoleId: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyMarketingRoleId = (<number[]>jsonData.PropertyMarketingRoleId);
         }
   }


   export class UpdateToDoCommandDataContract {
      Id: number;
      Title: string;
      Description: string;
      NegotiatorIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
         }
   }


   export class SaveEventToDoCommandDataContract extends Dezrez.ToDo.Command.SaveToDoCommandDataContract {
      Id: number;
      ToDoOwner: number;
      Interval: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      DueDate: DateHelper;
      Title: string;
      Description: string;
      Priority: Dezrez.System.EnumDataContract;
      NegotiatorIds: Array<number>;
      EventIds: Array<number>;
      EventType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventIds = (<number[]>jsonData.EventIds);
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
         }
   }


   export class AssignPropertyLeadsCommandDataContract {
      ToDoId: number;
      NegotiatorsIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ToDoId = jsonData.ToDoId;
            this.NegotiatorsIds = (<number[]>jsonData.NegotiatorsIds);
         }
   }

}

export module Dezrez.ToDo.Command.Task {

   export class AddBaseTaskCommandDataContract {
      ToDoId: number;
      NegotiatorsIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ToDoId = jsonData.ToDoId;
            this.NegotiatorsIds = (<number[]>jsonData.NegotiatorsIds);
         }
   }


   export class AddGroupTasksCommandDataContract extends Dezrez.ToDo.Command.Task.AddBaseTaskCommandDataContract {
      ToDoId: number;
      NegotiatorsIds: Array<number>;
      Recipients: Array<Dezrez.ToDo.Command.GroupRecipientToDoCommandDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.ToDo.Command.GroupRecipientToDoCommandDataContract(item);  });
            this.Recipients = <Dezrez.ToDo.Command.GroupRecipientToDoCommandDataContract[]>recipientsTempArray;

         }
   }


   export class AddPropertyTasksCommandDataContract extends Dezrez.ToDo.Command.Task.AddBaseTaskCommandDataContract {
      ToDoId: number;
      NegotiatorsIds: Array<number>;
      PropertyMarketingRoleIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PropertyMarketingRoleIds = (<number[]>jsonData.PropertyMarketingRoleIds);
         }
   }


   export class AddTaskNoteCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Message: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Message = jsonData.Message;
         }
   }


   export class CancelLeadAndTaskCommandDataContract {
      LeadId: number;
      TaskId: number;
      Reason: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.LeadId = jsonData.LeadId;
            this.TaskId = jsonData.TaskId;
            this.Reason = jsonData.Reason;
         }
   }


   export class ClaimTaskCommandDataContract {
      TaskId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TaskId = jsonData.TaskId;
         }
   }


   export class CompleteTaskCommandDataContract {
      TaskId: number;
      DueDate: DateHelper;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TaskId = jsonData.TaskId;
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
            this.Description = jsonData.Description;
         }
   }


   export class SnoozeTaskCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      DueDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
         }
   }


   export class ToDoTaskCommandDacaContract {
      EntityId: number;
      RoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.EntityId = jsonData.EntityId;
            this.RoleId = jsonData.RoleId;
         }
   }


   export class UpdateTaskRecurrenceCommandDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      DueDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
         }
   }


   export class UpdateTaskDueDateCommandDataContract {
      TaskId: number;
      DueDate: DateHelper;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TaskId = jsonData.TaskId;
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
         }
   }


   export class AddEventTasksCommandDataContract extends Dezrez.ToDo.Command.Task.AddBaseTaskCommandDataContract {
      ToDoId: number;
      NegotiatorsIds: Array<number>;
      EventIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventIds = (<number[]>jsonData.EventIds);
         }
   }


   export class CancelTaskCommandDataContract {
      TaskId: number;
      Reason: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.TaskId = jsonData.TaskId;
            this.Reason = jsonData.Reason;
         }
   }

}

export module Dezrez.ToDo.Query {

   export class ToDoTaskDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ToDoDetails: Dezrez.ToDo.Query.ToDoDetailsDataContract;
      ClaimedNegotiator: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      BranchId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToDoDetails = new Dezrez.ToDo.Query.ToDoDetailsDataContract(jsonData.ToDoDetails);
            this.ClaimedNegotiator = new Dezrez.ToDo.Query.NegotiatorTodoDataContract(jsonData.ClaimedNegotiator);
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
            this.StatusType = new Dezrez.System.EnumDataContract(jsonData.StatusType);
            this.BranchId = jsonData.BranchId;
         }
   }


   export class ActiveToDoDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      ToDoOwner: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      Interval: Dezrez.System.EnumDataContract;
      Title: string;
      Description: string;
      Priority: Dezrez.System.EnumDataContract;
      Negotiators: Array<Dezrez.ToDo.Query.NegotiatorTodoDataContract>;
      Tasks: Array<Dezrez.ToDo.Query.TaskDetailsDataContract>;
      ToDoType: Dezrez.System.EnumDataContract;
      SuggestedSchedule: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToDoOwner = new Dezrez.ToDo.Query.NegotiatorTodoDataContract(jsonData.ToDoOwner);
            this.Interval = new Dezrez.System.EnumDataContract(jsonData.Interval);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.Priority = new Dezrez.System.EnumDataContract(jsonData.Priority);
            var negotiatorsTempArray = _.map(jsonData.Negotiators, item => { return new Dezrez.ToDo.Query.NegotiatorTodoDataContract(item);  });
            this.Negotiators = <Dezrez.ToDo.Query.NegotiatorTodoDataContract[]>negotiatorsTempArray;

            var tasksTempArray = _.map(jsonData.Tasks, item => { return new Dezrez.ToDo.Query.TaskDetailsDataContract(item);  });
            this.Tasks = <Dezrez.ToDo.Query.TaskDetailsDataContract[]>tasksTempArray;

            this.ToDoType = new Dezrez.System.EnumDataContract(jsonData.ToDoType);
            this.SuggestedSchedule = new Dezrez.System.EnumDataContract(jsonData.SuggestedSchedule);
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
         }
   }


   export class FilterToDosDataContract {
      FilterCategory: string;
      ToDoType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.FilterCategory = jsonData.FilterCategory;
            this.ToDoType = jsonData.ToDoType;
         }
   }


   export class GeneralToDoTaskDataContract extends Dezrez.ToDo.Query.ToDoTaskDataContract {
      ToDoDetails: Dezrez.ToDo.Query.ToDoDetailsDataContract;
      ClaimedNegotiator: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      BranchId: number;
      Title: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
         }
   }


   export class GroupTaskDataContract extends Dezrez.ToDo.Query.ToDoTaskDataContract {
      ToDoDetails: Dezrez.ToDo.Query.ToDoDetailsDataContract;
      ClaimedNegotiator: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      BranchId: number;
      PeopleGroup: Dezrez.Group.Query.Get.PeopleGroupDataContract;
      GroupInterests: Array<Dezrez.Role.Query.Get.RoleDataContract>;

      public propertyMarketing: Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract;
      get PropertyMarketingData(): Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.propertyMarketing || (this.propertyMarketing = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyMarketing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyLetting: Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract;
      get PropertyLettingData(): Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.propertyLetting || (this.propertyLetting = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyLettingRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyLetting";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertySales: Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract;
      get PropertySalesData(): Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.propertySales || (this.propertySales = this.getType<Dezrez.Role.Query.Get.Marketing.PropertySalesRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertySales";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public propertyAuction: Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract;
      get PropertyAuctionData(): Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.propertyAuction || (this.propertyAuction = this.getType<Dezrez.Role.Query.Get.Marketing.PropertyAuctionRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "PropertyAuction";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupSearching: Dezrez.Group.Query.SearchingRoles.GroupSearchingRoleDataContract;
      get GroupSearchingData(): Dezrez.Group.Query.SearchingRoles.GroupSearchingRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.groupSearching || (this.groupSearching = this.getType<Dezrez.Group.Query.SearchingRoles.GroupSearchingRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupSearching";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupLettingsSearching: Dezrez.Group.Query.SearchingRoles.GroupLettingsSearchingRoleDataContract;
      get GroupLettingsSearchingData(): Dezrez.Group.Query.SearchingRoles.GroupLettingsSearchingRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.groupLettingsSearching || (this.groupLettingsSearching = this.getType<Dezrez.Group.Query.SearchingRoles.GroupLettingsSearchingRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupLettingsSearching";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupSalesSearching: Dezrez.Group.Query.SearchingRoles.GroupSalesSearchingRoleDataContract;
      get GroupSalesSearchingData(): Dezrez.Group.Query.SearchingRoles.GroupSalesSearchingRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.groupSalesSearching || (this.groupSalesSearching = this.getType<Dezrez.Group.Query.SearchingRoles.GroupSalesSearchingRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupSalesSearching";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public company: Dezrez.Role.Query.Get.Group.CompanyRoleDataContract;
      get CompanyData(): Dezrez.Role.Query.Get.Group.CompanyRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.company || (this.company = this.getType<Dezrez.Role.Query.Get.Group.CompanyRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Company";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public group: Dezrez.Role.Query.Get.Group.GroupRoleDataContract;
      get GroupData(): Dezrez.Role.Query.Get.Group.GroupRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.group || (this.group = this.getType<Dezrez.Role.Query.Get.Group.GroupRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Group";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public progression: Dezrez.Role.Query.Get.Group.ProgressionRoleDataContract;
      get ProgressionData(): Dezrez.Role.Query.Get.Group.ProgressionRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.progression || (this.progression = this.getType<Dezrez.Role.Query.Get.Group.ProgressionRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Progression";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public purchasing: Dezrez.Role.Query.Get.Group.PurchasingRoleDataContract;
      get PurchasingData(): Dezrez.Role.Query.Get.Group.PurchasingRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.purchasing || (this.purchasing = this.getType<Dezrez.Role.Query.Get.Group.PurchasingRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Purchasing";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public groupProperty: Dezrez.Role.Query.Get.Group.GroupPropertyRoleDataContract;
      get GroupPropertyData(): Dezrez.Role.Query.Get.Group.GroupPropertyRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.groupProperty || (this.groupProperty = this.getType<Dezrez.Role.Query.Get.Group.GroupPropertyRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "GroupProperty";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public interest: Dezrez.Role.Query.Get.Group.InterestRoleDataContract;
      get InterestData(): Dezrez.Role.Query.Get.Group.InterestRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.interest || (this.interest = this.getType<Dezrez.Role.Query.Get.Group.InterestRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Interest";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public tenant: Dezrez.Role.Query.Get.Group.TenantRoleDataContract;
      get TenantData(): Dezrez.Role.Query.Get.Group.TenantRoleDataContract {
         if (this.GroupInterests && this.GroupInterests.length) {
            return (this.tenant || (this.tenant = this.getType<Dezrez.Role.Query.Get.Group.TenantRoleDataContract>(this.GroupInterests, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "Tenant";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.PeopleGroup = new Dezrez.Group.Query.Get.PeopleGroupDataContract(jsonData.PeopleGroup);
            var groupInterestsTempArray = _.map(jsonData.GroupInterests, (item: any) => {
               return new Dezrez.Role.Query.Get.RoleDataContract(item);
            });
            this.GroupInterests = <Dezrez.Role.Query.Get.RoleDataContract[]>groupInterestsTempArray;

         }
   }


   export class GroupToDoTaskDataContract extends Dezrez.ToDo.Query.ToDoTaskDataContract {
      ToDoDetails: Dezrez.ToDo.Query.ToDoDetailsDataContract;
      ClaimedNegotiator: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      BranchId: number;
      Name: string;
      Description: string;
      GroupId: number;
      GroupIcon: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.GroupId = jsonData.GroupId;
            this.GroupIcon = new Dezrez.System.EnumDataContract(jsonData.GroupIcon);
         }
   }


   export class NegotiatorTodoDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Email: Dezrez.People.Query.Get.ContactItemDataContract;
      ContactName: string;
      FirstName: string;
      LastName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Email = new Dezrez.People.Query.Get.ContactItemDataContract(jsonData.Email);
            this.ContactName = jsonData.ContactName;
            this.FirstName = jsonData.FirstName;
            this.LastName = jsonData.LastName;
         }
   }


   export class PropertyToDoTaskDataContract extends Dezrez.ToDo.Query.ToDoTaskDataContract {
      ToDoDetails: Dezrez.ToDo.Query.ToDoDetailsDataContract;
      ClaimedNegotiator: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      BranchId: number;
      Owner: Dezrez.Property.Query.Owners.PropertyOwnerDataContract;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Street: string;
      Number: string;
      City: string;
      PostCode: string;
      Description: string;
      Image: string;
      PropertyId: number;
      RoleId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Owner = new Dezrez.Property.Query.Owners.PropertyOwnerDataContract(jsonData.Owner);
            this.Price = new Dezrez.Role.Query.Get.Marketing.PriceDataContract(jsonData.Price);
            this.Street = jsonData.Street;
            this.Number = jsonData.Number;
            this.City = jsonData.City;
            this.PostCode = jsonData.PostCode;
            this.Description = jsonData.Description;
            this.Image = jsonData.Image;
            this.PropertyId = jsonData.PropertyId;
            this.RoleId = jsonData.RoleId;
         }
   }


   export class TaskDetailsDataContract {
      Id: number;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      ScheduleType: Dezrez.System.EnumDataContract;
      Event: Dezrez.ToDo.Query.EventTaskDetailsDataContract;
      TeamIds: Array<number>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Id = jsonData.Id;
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
            this.StatusType = new Dezrez.System.EnumDataContract(jsonData.StatusType);
            this.ScheduleType = new Dezrez.System.EnumDataContract(jsonData.ScheduleType);
            this.Event = new Dezrez.ToDo.Query.EventTaskDetailsDataContract(jsonData.Event);
            this.TeamIds = (<number[]>jsonData.TeamIds);
         }
   }


   export class ToDoDetailsDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Title: string;
      Description: string;
      Type: Dezrez.System.EnumDataContract;
      CompletedTasksNumber: number;
      TotalTasksNumber: number;
      Tasks: Array<Dezrez.ToDo.Query.TaskDetailsDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
            this.Type = new Dezrez.System.EnumDataContract(jsonData.Type);
            this.CompletedTasksNumber = jsonData.CompletedTasksNumber;
            this.TotalTasksNumber = jsonData.TotalTasksNumber;
            var tasksTempArray = _.map(jsonData.Tasks, item => { return new Dezrez.ToDo.Query.TaskDetailsDataContract(item);  });
            this.Tasks = <Dezrez.ToDo.Query.TaskDetailsDataContract[]>tasksTempArray;

         }
   }


   export class EventToDoTaskDataContract extends Dezrez.ToDo.Query.ToDoTaskDataContract {
      ToDoDetails: Dezrez.ToDo.Query.ToDoDetailsDataContract;
      ClaimedNegotiator: Dezrez.ToDo.Query.NegotiatorTodoDataContract;
      DueDate: DateHelper;
      StatusType: Dezrez.System.EnumDataContract;
      BranchId: number;
      EventId: number;
      Title: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.EventId = jsonData.EventId;
            this.Title = jsonData.Title;
            this.Description = jsonData.Description;
         }
   }


   export class EventTaskDetailsDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      Name: string;
      Description: string;
      DateTime: DateHelper;
      EventCategory: Dezrez.System.EnumDataContract;
      EventType: Dezrez.System.EnumDataContract;
      EventStatus: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Name = jsonData.Name;
            this.Description = jsonData.Description;
            this.DateTime = new DateHelper(jsonData.DateTime, null, true);
            this.EventCategory = new Dezrez.System.EnumDataContract(jsonData.EventCategory);
            this.EventType = new Dezrez.System.EnumDataContract(jsonData.EventType);
            this.EventStatus = new Dezrez.System.EnumDataContract(jsonData.EventStatus);
         }
   }


   export class TaskGroupRoleDataContract extends Dezrez.Role.Query.Get.Group.GroupRoleDataContract {
      GroupId: number;
      FinancialStatus: Dezrez.System.EnumDataContract;
      Origin: Dezrez.System.EnumDataContract;
      Grade: Dezrez.System.EnumDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }

}

export module Dezrez.ToDo.Query.Task {

   export class TaskPropertyMarketingRoleDataContract extends Dezrez.Role.Query.Get.Marketing.PropertyMarketingRoleDataContract {
      GroupId: number;
      DefaultPicture: Dezrez.Media.DocumentDataContract;
      PropertyId: number;
      AgencyType: Dezrez.System.EnumDataContract;
      AgencyPeriod: Dezrez.System.EnumDataContract;
      Flags: Array<Dezrez.System.EnumDataContract>;
      Price: Dezrez.Role.Query.Get.Marketing.PriceDataContract;
      Fees: Array<Dezrez.Agency.Query.Fees.AgencyFeeDataContract>;

      public branchFeeDataContract: Dezrez.Agency.Query.Fees.BranchFeeDataContract;
      get BranchFeeDataContractData(): Dezrez.Agency.Query.Fees.BranchFeeDataContract {
         if (this.Fees && this.Fees.length) {
            return (this.branchFeeDataContract || (this.branchFeeDataContract = this.getType<Dezrez.Agency.Query.Fees.BranchFeeDataContract>(this.Fees, (item :any) => {
                if (item.Type) {
                   return item.Type.SystemName === "BranchFeeDataContract";
                } else { return false; }
            })));
         } else { return undefined; }
      }

      public getType<T>(array: Array<any>, checkFunction: (item: any) => boolean): T {
         return _.find(array, (item) => checkFunction(item));
      }

      OwningTeam: Dezrez.Role.Query.Get.Marketing.OwningTeamDataContract;
      Branch: Dezrez.Branch.Query.Get.BranchReferenceDataContract;
      ValidEpcInPlace: boolean;
      ProofOfIdReceived: boolean;
      ProofOfOwnershipReceived: boolean;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService.ToDo {

   export class NoteTaskNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      TaskId: number;
      ToDoId: number;
      DateTimeCreated: DateHelper;
      Message: string;
      Negotiator: Dezrez.Negotiators.Query.Get.NegotiatorDataContract;
      Recipients: Array<Dezrez.ToDo.Query.NegotiatorTodoDataContract>;
      ActionName: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TaskId = jsonData.TaskId;
            this.ToDoId = jsonData.ToDoId;
            this.DateTimeCreated = new DateHelper(jsonData.DateTimeCreated, null, true);
            this.Message = jsonData.Message;
            this.Negotiator = new Dezrez.Negotiators.Query.Get.NegotiatorDataContract(jsonData.Negotiator);
            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.ToDo.Query.NegotiatorTodoDataContract(item);  });
            this.Recipients = <Dezrez.ToDo.Query.NegotiatorTodoDataContract[]>recipientsTempArray;

            this.ActionName = jsonData.ActionName;
            this.MessageType = jsonData.MessageType;
         }
   }


   export class TaskNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      TaskId: number;
      ToDoId: number;
      DateTimeCreated: DateHelper;
      ClaimedNegotiator: Dezrez.Negotiators.Query.Get.NegotiatorDataContract;
      ActionName: string;
      DueDate: DateHelper;
      Recipients: Array<Dezrez.ToDo.Query.NegotiatorTodoDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.TaskId = jsonData.TaskId;
            this.ToDoId = jsonData.ToDoId;
            this.DateTimeCreated = new DateHelper(jsonData.DateTimeCreated, null, true);
            this.ClaimedNegotiator = new Dezrez.Negotiators.Query.Get.NegotiatorDataContract(jsonData.ClaimedNegotiator);
            this.ActionName = jsonData.ActionName;
            this.DueDate = new DateHelper(jsonData.DueDate, null, true);
            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.ToDo.Query.NegotiatorTodoDataContract(item);  });
            this.Recipients = <Dezrez.ToDo.Query.NegotiatorTodoDataContract[]>recipientsTempArray;

            this.MessageType = jsonData.MessageType;
         }
   }


   export class ToDoNoteNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      ToDoId: number;
      DateTimeCreated: DateHelper;
      Message: string;
      Negotiator: Dezrez.Negotiators.Query.Get.NegotiatorDataContract;
      Recipients: Array<Dezrez.ToDo.Query.NegotiatorTodoDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.ToDoId = jsonData.ToDoId;
            this.DateTimeCreated = new DateHelper(jsonData.DateTimeCreated, null, true);
            this.Message = jsonData.Message;
            this.Negotiator = new Dezrez.Negotiators.Query.Get.NegotiatorDataContract(jsonData.Negotiator);
            var recipientsTempArray = _.map(jsonData.Recipients, item => { return new Dezrez.ToDo.Query.NegotiatorTodoDataContract(item);  });
            this.Recipients = <Dezrez.ToDo.Query.NegotiatorTodoDataContract[]>recipientsTempArray;

            this.MessageType = jsonData.MessageType;
         }
   }

}

export module Dezrez.Core.DataContracts.External.NotificationService.Reminders {

   export class ReminderNotification extends Dezrez.Core.DataContracts.External.NotificationService.NotificationServiceMessageBase {
      MessageType: string;
      Reminder: Dezrez.Reminders.Query.BaseReminderDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.Reminder = new Dezrez.Reminders.Query.BaseReminderDataContract(jsonData.Reminder);
         }
   }


   export class AppointmentReminderNotification extends Dezrez.Core.DataContracts.External.NotificationService.Reminders.ReminderNotification {
      Reminder: Dezrez.Reminders.Query.BaseReminderDataContract;
      MessageType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MessageType = jsonData.MessageType;
         }
   }


   export class MilestoneReminderNotification extends Dezrez.Core.DataContracts.External.NotificationService.Reminders.ReminderNotification {
      Reminder: Dezrez.Reminders.Query.BaseReminderDataContract;
      MessageType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MessageType = jsonData.MessageType;
         }
   }


   export class TaskReminderNotification extends Dezrez.Core.DataContracts.External.NotificationService.Reminders.ReminderNotification {
      Reminder: Dezrez.Reminders.Query.BaseReminderDataContract;
      MessageType: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.MessageType = jsonData.MessageType;
         }
   }

}

export module Dezrez.Reporting {

   export class ReportRequestDataContract {
      Name: string;
      Facets: Array<Enums.ReportFacet>;
      NegotiatorIds: Array<number>;
      From: DateHelper;
      To: DateHelper;
      BranchId: number;
      IncludeDrafts: boolean;
      RoleTypes: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Facets = jsonData.Facets;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.BranchId = jsonData.BranchId;
            this.IncludeDrafts = jsonData.IncludeDrafts;
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
         }
   }


   export class ReportResultDataContract {
      Facet: Enums.ReportFacet;
      Value: number;
      Name: string;
      NegotiatorId: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Facet = <Enums.ReportFacet>(jsonData.Facet);
            this.Value = jsonData.Value;
            this.Name = jsonData.Name;
            this.NegotiatorId = jsonData.NegotiatorId;
         }
   }


   export class ReportCsvDataContract {
      Facets: Array<Enums.ReportFacet>;
      NegotiatorIds: Array<number>;
      From: DateHelper;
      To: DateHelper;
      BranchIds: Array<number>;
      IncludeDrafts: boolean;
      RoleTypes: Array<string>;
      Order: Enums.ReportCsvOrder;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Facets = jsonData.Facets;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.BranchIds = (<number[]>jsonData.BranchIds);
            this.IncludeDrafts = jsonData.IncludeDrafts;
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
            this.Order = <Enums.ReportCsvOrder>(jsonData.Order);
         }
   }


   export class ChartResultDataContract {
      Name: string;
      Value: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Value = jsonData.Value;
         }
   }


   export class ReportChartRequestDataContract {
      Name: string;
      Facets: Array<Enums.ChartReportFacet>;
      NegotiatorIds: Array<number>;
      From: DateHelper;
      To: DateHelper;
      BranchId: number;
      IncludeDrafts: boolean;
      RoleTypes: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Name = jsonData.Name;
            this.Facets = jsonData.Facets;
            this.NegotiatorIds = (<number[]>jsonData.NegotiatorIds);
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.BranchId = jsonData.BranchId;
            this.IncludeDrafts = jsonData.IncludeDrafts;
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
         }
   }


   export class ReportChartResultDataContract {
      Facet: Enums.ChartReportFacet;
      Name: string;
      NegotiatorId: number;
      Results: Array<Dezrez.Reporting.ChartResultDataContract>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Facet = <Enums.ChartReportFacet>(jsonData.Facet);
            this.Name = jsonData.Name;
            this.NegotiatorId = jsonData.NegotiatorId;
            var resultsTempArray = _.map(jsonData.Results, item => { return new Dezrez.Reporting.ChartResultDataContract(item);  });
            this.Results = <Dezrez.Reporting.ChartResultDataContract[]>resultsTempArray;

         }
   }


   export class CompleteBranchReportResultDataContract {
      Sales: Dezrez.Reporting.Periodic.SalesPeriodicReportResultDataContract;
      Lettings: Dezrez.Reporting.Periodic.LettingsPeriodicReportResultDataContract;
      Leads: Dezrez.Reporting.Periodic.LeadsPeriodicReportResultDataContract;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Sales = new Dezrez.Reporting.Periodic.SalesPeriodicReportResultDataContract(jsonData.Sales);
            this.Lettings = new Dezrez.Reporting.Periodic.LettingsPeriodicReportResultDataContract(jsonData.Lettings);
            this.Leads = new Dezrez.Reporting.Periodic.LeadsPeriodicReportResultDataContract(jsonData.Leads);
         }
   }

}

export module Dezrez.Reporting.Daily {

   export class DailyReportRequestDataContract {
      From: DateHelper;
      To: DateHelper;
      NegotiatorId: number;
      RoleTypes: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.NegotiatorId = jsonData.NegotiatorId;
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
         }
   }


   export class DailyReportResultDataContract {
      Date: DateHelper;
      NegotiatorId: number;
      Facets: any;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Date = new DateHelper(jsonData.Date, null, true);
            this.NegotiatorId = jsonData.NegotiatorId;
            this.Facets = jsonData.Facets;
         }
   }

}

export module Dezrez.Reporting.Periodic {

   export class LeadsPeriodicReportResultDataContract {
      Canvassing: number;
      Recommendations: number;
      InterOfficeReferrals: number;
      Boards: number;
      Web: number;
      Portals: number;
      OfficeVisit: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.Canvassing = jsonData.Canvassing;
            this.Recommendations = jsonData.Recommendations;
            this.InterOfficeReferrals = jsonData.InterOfficeReferrals;
            this.Boards = jsonData.Boards;
            this.Web = jsonData.Web;
            this.Portals = jsonData.Portals;
            this.OfficeVisit = jsonData.OfficeVisit;
         }
   }


   export class LettingsPeriodicReportResultDataContract {
      LetAgreed: number;
      ApplicantsRegistered: number;
      AverageLetTime: number;
      ViewingsPerLet: number;
      StockLevel: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.LetAgreed = jsonData.LetAgreed;
            this.ApplicantsRegistered = jsonData.ApplicantsRegistered;
            this.AverageLetTime = jsonData.AverageLetTime;
            this.ViewingsPerLet = jsonData.ViewingsPerLet;
            this.StockLevel = jsonData.StockLevel;
         }
   }


   export class PeriodicReportCsvRequestDataContract {
      From: DateHelper;
      To: DateHelper;
      BranchIds: Array<number>;
      RoleTypes: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.BranchIds = (<number[]>jsonData.BranchIds);
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
         }
   }


   export class PeriodicReportRequestDataContract {
      From: DateHelper;
      To: DateHelper;
      BranchId: number;
      RoleTypes: Array<string>;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.From = new DateHelper(jsonData.From, null, true);
            this.To = new DateHelper(jsonData.To, null, true);
            this.BranchId = jsonData.BranchId;
            this.RoleTypes = (<string[]>jsonData.RoleTypes);
         }
   }


   export class SalesPeriodicReportResultDataContract {
      AverageHousePrices: number;
      BuyersRegistered: number;
      AverageSaleTimes: number;
      ViewingsPerSale: number;
      BoardsErected: number;
      StockLevel: number;
      GrossSales: number;
      TotalViewingsBooked: number;
      InstructionsGained: number;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.AverageHousePrices = jsonData.AverageHousePrices;
            this.BuyersRegistered = jsonData.BuyersRegistered;
            this.AverageSaleTimes = jsonData.AverageSaleTimes;
            this.ViewingsPerSale = jsonData.ViewingsPerSale;
            this.BoardsErected = jsonData.BoardsErected;
            this.StockLevel = jsonData.StockLevel;
            this.GrossSales = jsonData.GrossSales;
            this.TotalViewingsBooked = jsonData.TotalViewingsBooked;
            this.InstructionsGained = jsonData.InstructionsGained;
         }
   }

}

export module Dezrez.Screenz {

   export class CreateScreenzDataContract {
      ShortLivedCode: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.ShortLivedCode = jsonData.ShortLivedCode;
            this.Description = jsonData.Description;
         }
   }


   export class ScreenzConfigDataContract extends Dezrez.System.BaseDataContract {
      Id: number;
      UniqueIdentifier: string;
      Latitude: number;
      Longitude: number;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            super(jsonData);
            this.UniqueIdentifier = jsonData.UniqueIdentifier;
            this.Latitude = jsonData.Latitude;
            this.Longitude = jsonData.Longitude;
            this.Description = jsonData.Description;
         }
   }


   export class ScreenzDataContract {
      UniqueIdentifier: string;
      Description: string;
      constructor(jsonData?:any)
      {
            jsonData = jsonData || {};
            this.UniqueIdentifier = jsonData.UniqueIdentifier;
            this.Description = jsonData.Description;
         }
   }

}

