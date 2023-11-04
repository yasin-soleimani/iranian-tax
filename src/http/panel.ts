import axiosUtil from "@/Utils/axios.util";
import Token from "@/Utils/token";
import API from "@/constants/api";
import { BaseInformation } from "@/interface/panel/baseInformation.model";
import { GetInvoicesListFilter } from "@/interface/panel/getInvoicesList.model";
import { MoadianInvoiceHeader } from "@/interface/panel/invoiceHeader";
import { AxiosResponse } from "axios";

// send profile information data (request)
async function sendBaseInformation(
  data: BaseInformation
): Promise<AxiosResponse> {
  const url = API.panel.baseInformation;
  const body = data;
  const token = Token;

  return axiosUtil.put(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// get profile information (request)
async function getProfileInformation(): Promise<AxiosResponse> {
  const url = API.panel.getProfileInformation;
  const token = Token;

  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// get manage info data (request)
async function getManageInfo(): Promise<AxiosResponse> {
  const url = API.panel.getManageInfo;
  const token = Token;

  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// refresh api key => user (request)
async function refreshApiKey(): Promise<AxiosResponse> {
  const url = API.panel.refreshApiKey;
  const token = Token;

  return axiosUtil.put(url, "", {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// update ip address (request)
async function updateIpAddress(
  newIpAddresses: string[]
): Promise<AxiosResponse> {
  const url = API.panel.updateIpAddress;
  const token = Token;
  const body = {
    ipAddresses: newIpAddresses,
  };

  return axiosUtil.put(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// moadian invoiece

// create new invoice (post invoice)

async function createNewInvoice(
  moadianInvoiceHeader: MoadianInvoiceHeader,
  moadianInvoiceBody: string[],
  moadianInvoicePayment: string[]
): Promise<AxiosResponse> {
  const url = API.panel.createNewInvoice;
  const token = Token;
  const body = {
    header: moadianInvoiceHeader,
    body: moadianInvoiceBody,
    payments: moadianInvoicePayment,
  };

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// get invoices list
async function GetInvoicesList(
  filter: GetInvoicesListFilter
): Promise<AxiosResponse> {
  const url = API.panel.getInvoicesList;
  const token = Token;

  return axiosUtil.get(url, {
    params: { type: filter.type, search: filter.search, page: filter.page },
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// get invoice details (request)
async function getInvoiceDetails(invoiceId: string): Promise<AxiosResponse> {
  const url = API.panel.getInvoiceDetails + "/" + invoiceId;
  const token = Token;

  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// send updated invoice to database (request)
async function updatedInvoice(
  updatedInvoice: any,
  invoiceId: string
): Promise<AxiosResponse> {
  const url = API.panel.sendUpdatedInvoice + "/" + invoiceId;
  const token = Token;
  const data = updatedInvoice;

  return axiosUtil.put(url, data, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

// submit one invoice (request)
async function submitOneInvoice(invoiceId: string): Promise<AxiosResponse> {
  const url = API.panel.sendOneInvoice + "/" + invoiceId;
  const token = Token;
  return axiosUtil.post(
    url,
    {},
    {
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

async function uploadPrivateKey(file: any): Promise<AxiosResponse> {
  const url = API.panel.uploadPrivateKey;
  const token = Token;
  const data = new FormData();
  data.append("private_key", file);

  return axiosUtil.put(url, data, {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getEconomicCodeDetails(
  nationalCode: string
): Promise<AxiosResponse> {
  const url = API.panel.getEconomicCodeDetails + nationalCode;
  const token = Token;

  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getFiscalDetails(): Promise<AxiosResponse> {
  const url = API.panel.getFiscalDetails;
  const token = Token;

  return axiosUtil.get(url, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function sendInvoiceIdsList(invoiceIdsList: {
  ids: string[];
}): Promise<AxiosResponse> {
  const url = API.panel.sendInvoiceIdsList;
  const token = Token;
  const body = invoiceIdsList;

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getStatusInvoices(invoiceIdsList: {
  ids: string[];
}): Promise<AxiosResponse> {
  const url = API.panel.getStatusInvoices;
  const token = Token;
  const body = invoiceIdsList;

  return axiosUtil.post(url, body, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export const panelService = {
  sendBaseInformation,
  getProfileInformation,
  getManageInfo,
  refreshApiKey,
  updateIpAddress,
  createNewInvoice,
  GetInvoicesList,
  getInvoiceDetails,
  updatedInvoice,
  submitOneInvoice,
  uploadPrivateKey,
  getEconomicCodeDetails,
  getFiscalDetails,
  sendInvoiceIdsList,
  getStatusInvoices,
};
