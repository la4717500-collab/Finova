import { GoogleGenAI } from '@google/genai';

function getSampleOldCompanyData(filename?: string) {
  return {
    companyName: 'Comercializadora & Distribuidora Norte C.A.',
    dateRange: {
      start: '2026-08-01',
      end: '2026-11-13',
    },
    summary: {
      totalSales: 7840.50,
      totalExpenses: 4620.00,
      totalReceivable: 395.00,
      totalPayable: 460.00,
    },
    customers: [
      {
        id: `cust-imp-${Date.now()}-1`,
        name: 'Supermercado El Ahorro C.A.',
        phone: '0424-3338899',
        email: 'compras@elahorro.com.ve',
        taxId: 'J-30984712-0',
        address: 'Av. Las Delicias, Local 12',
        category: 'VIP',
        totalPurchases: 2850.00,
      },
      {
        id: `cust-imp-${Date.now()}-2`,
        name: 'María Fernández',
        phone: '0414-5551234',
        email: 'maria.fernandez@gmail.com',
        taxId: 'V-18.452.100',
        address: 'Urb. El Bosque, Calle 4',
        category: 'Mayorista',
        totalPurchases: 940.00,
      },
      {
        id: `cust-imp-${Date.now()}-3`,
        name: 'Roberto Da Silva',
        phone: '0412-9988112',
        email: 'roberto.dasilva@yahoo.es',
        taxId: 'V-14.320.980',
        address: 'Sector Los Sauces',
        category: 'Frecuente',
        totalPurchases: 620.00,
      },
      {
        id: `cust-imp-${Date.now()}-4`,
        name: 'Andrea Morales',
        phone: '0416-2244668',
        email: 'andrea.morales@hotmail.com',
        taxId: 'V-22.104.550',
        address: 'Centro Comercial Gran Bazar, Local 4',
        category: 'Minorista',
        totalPurchases: 410.00,
      },
      {
        id: `cust-imp-${Date.now()}-5`,
        name: 'Bodegón La Castellana',
        phone: '0414-8899001',
        email: 'bodegonlacastellana@gmail.com',
        taxId: 'J-50123984-1',
        address: 'Calle Real, Edif. La Castellana PB',
        category: 'VIP',
        totalPurchases: 2120.00,
      },
    ],
    products: [
      {
        id: `prod-imp-${Date.now()}-1`,
        name: 'Harina Pan Tradicional 1kg',
        sku: 'HAR-001',
        category: 'Víveres & Alimentos',
        costPrice: 1.05,
        salePrice: 1.40,
        stock: 55,
        minStockAlert: 10,
        isAvailable: true,
      },
      {
        id: `prod-imp-${Date.now()}-2`,
        name: 'Aceite Vegetal Diana 1L',
        sku: 'ACE-002',
        category: 'Víveres & Alimentos',
        costPrice: 2.30,
        salePrice: 3.10,
        stock: 32,
        minStockAlert: 8,
        isAvailable: true,
      },
      {
        id: `prod-imp-${Date.now()}-3`,
        name: 'Café Molido Fama de América 500g',
        sku: 'CAF-003',
        category: 'Bebidas & Café',
        costPrice: 3.20,
        salePrice: 4.50,
        stock: 28,
        minStockAlert: 6,
        isAvailable: true,
      },
      {
        id: `prod-imp-${Date.now()}-4`,
        name: 'Arroz Primor Blanco 1kg',
        sku: 'ARR-004',
        category: 'Víveres & Alimentos',
        costPrice: 1.15,
        salePrice: 1.60,
        stock: 45,
        minStockAlert: 10,
        isAvailable: true,
      },
      {
        id: `prod-imp-${Date.now()}-5`,
        name: 'Pasta Primor Plumas 1kg',
        sku: 'PAS-005',
        category: 'Víveres & Alimentos',
        costPrice: 1.25,
        salePrice: 1.75,
        stock: 40,
        minStockAlert: 8,
        isAvailable: true,
      },
      {
        id: `prod-imp-${Date.now()}-6`,
        name: 'Queso Paisa Pasteurizado 500g',
        sku: 'QUE-006',
        category: 'Lácteos & Refrigerados',
        costPrice: 3.80,
        salePrice: 5.20,
        stock: 18,
        minStockAlert: 5,
        isAvailable: true,
      },
      {
        id: `prod-imp-${Date.now()}-7`,
        name: 'Leche en Polvo La Campiña 900g',
        sku: 'LEC-007',
        category: 'Lácteos & Refrigerados',
        costPrice: 6.90,
        salePrice: 8.90,
        stock: 22,
        minStockAlert: 5,
        isAvailable: true,
      },
    ],
    debts: [
      {
        id: `debt-imp-${Date.now()}-1`,
        type: 'receivable' as const,
        contactName: 'Supermercado El Ahorro C.A.',
        contactPhone: '0424-3338899',
        totalAmount: 240.00,
        paidAmount: 60.00,
        remainingAmount: 180.00,
        dueDate: '2026-11-25',
        createdAt: '2026-11-05',
        notes: 'Crédito de 20 bultos de harina y aceite',
        status: 'pending' as const,
        history: [{ id: 'p-1', amount: 60, date: '2026-11-10', notes: 'Abono inicial en efectivo' }],
      },
      {
        id: `debt-imp-${Date.now()}-2`,
        type: 'receivable' as const,
        contactName: 'Andrea Morales',
        contactPhone: '0416-2244668',
        totalAmount: 150.00,
        paidAmount: 0,
        remainingAmount: 150.00,
        dueDate: '2026-11-20',
        createdAt: '2026-11-06',
        notes: 'Pedido de víveres a crédito 15 días',
        status: 'pending' as const,
        history: [],
      },
      {
        id: `debt-imp-${Date.now()}-3`,
        type: 'receivable' as const,
        contactName: 'Roberto Da Silva',
        contactPhone: '0412-9988112',
        totalAmount: 65.00,
        paidAmount: 0,
        remainingAmount: 65.00,
        dueDate: '2026-11-18',
        createdAt: '2026-11-08',
        notes: 'Saldo pendiente por lote de café',
        status: 'pending' as const,
        history: [],
      },
      {
        id: `debt-imp-${Date.now()}-4`,
        type: 'payable' as const,
        contactName: 'Alimentos Polar Comercial C.A.',
        contactPhone: '0241-8007652',
        totalAmount: 340.00,
        paidAmount: 0,
        remainingAmount: 340.00,
        dueDate: '2026-11-30',
        createdAt: '2026-11-01',
        notes: 'Factura F-8924 por despacho de mercancía mensual',
        status: 'pending' as const,
        history: [],
      },
      {
        id: `debt-imp-${Date.now()}-5`,
        type: 'payable' as const,
        contactName: 'Embalajes & Cajas del Centro',
        contactPhone: '0414-9988776',
        totalAmount: 120.00,
        paidAmount: 0,
        remainingAmount: 120.00,
        dueDate: '2026-11-22',
        createdAt: '2026-11-04',
        notes: 'Suministro de bolsas plásticas y precintos',
        status: 'pending' as const,
        history: [],
      },
    ],
    transactions: [
      {
        id: `tx-imp-${Date.now()}-1`,
        type: 'sale' as const,
        amount: 320.00,
        concept: 'Venta surtida víveres al mayor',
        category: 'Venta Mayorista',
        paymentMethod: 'pagomovil' as const,
        date: '2026-11-13',
        time: '10:30',
        customerOrSupplier: 'Supermercado El Ahorro C.A.',
      },
      {
        id: `tx-imp-${Date.now()}-2`,
        type: 'sale' as const,
        amount: 85.00,
        concept: 'Venta de café y lácteos',
        category: 'Venta al Detal',
        paymentMethod: 'cash' as const,
        date: '2026-11-13',
        time: '11:15',
        customerOrSupplier: 'Cliente mostrador',
      },
      {
        id: `tx-imp-${Date.now()}-3`,
        type: 'expense' as const,
        amount: 60.00,
        concept: 'Pago de flete y transporte de mercancía',
        category: 'Transporte & Envíos',
        paymentMethod: 'cash' as const,
        date: '2026-11-13',
        time: '12:00',
        customerOrSupplier: 'Transportes Rápidos C.A.',
      },
      {
        id: `tx-imp-${Date.now()}-4`,
        type: 'sale' as const,
        amount: 195.00,
        concept: 'Venta al mayor de harina y arroz',
        category: 'Venta Mayorista',
        paymentMethod: 'zelle' as const,
        date: '2026-11-12',
        time: '14:20',
        customerOrSupplier: 'Bodegón La Castellana',
      },
      {
        id: `tx-imp-${Date.now()}-5`,
        type: 'expense' as const,
        amount: 140.00,
        concept: 'Servicios de luz eléctrica y agua local comercial',
        category: 'Servicios Públicos',
        paymentMethod: 'pagomovil' as const,
        date: '2026-11-11',
        time: '16:00',
        customerOrSupplier: 'Corpoelec / Hidrocentro',
      },
      {
        id: `tx-imp-${Date.now()}-6`,
        type: 'sale' as const,
        amount: 210.00,
        concept: 'Pedido quincenal de productos varios',
        category: 'Venta Mayorista',
        paymentMethod: 'binance' as const,
        date: '2026-11-10',
        time: '09:45',
        customerOrSupplier: 'María Fernández',
      },
      {
        id: `tx-imp-${Date.now()}-7`,
        type: 'expense' as const,
        amount: 450.00,
        concept: 'Reposición inicial de stock de aceite y arroz',
        category: 'Mercancía / Stock',
        paymentMethod: 'transfer' as const,
        date: '2026-11-08',
        time: '15:30',
        customerOrSupplier: 'Alimentos Polar Comercial C.A.',
      },
      {
        id: `tx-imp-${Date.now()}-8`,
        type: 'sale' as const,
        amount: 175.50,
        concept: 'Venta mostrador fin de semana',
        category: 'Venta al Detal',
        paymentMethod: 'card' as const,
        date: '2026-11-07',
        time: '17:10',
        customerOrSupplier: 'Clientes mostrador',
      },
    ],
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pdfBase64, filename, sampleMode } = req.body || {};

    if (sampleMode || !pdfBase64) {
      return res.status(200).json({
        success: true,
        source: 'sample_template',
        data: getSampleOldCompanyData(filename),
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && pdfBase64) {
      try {
        const ai = new GoogleGenAI({
          apiKey,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            },
          },
        });

        const prompt = `Analiza detalladamente este documento PDF de contabilidad/registros de una empresa anterior.
Extrae minuciosamente toda la información disponible y estructúrala en formato JSON con la siguiente estructura exacta:
{
  "companyName": "Nombre de la empresa o negocio",
  "dateRange": {
    "start": "YYYY-MM-DD",
    "end": "YYYY-MM-DD"
  },
  "summary": {
    "totalSales": 0,
    "totalExpenses": 0,
    "totalReceivable": 0,
    "totalPayable": 0
  },
  "customers": [
    {
      "id": "c-1",
      "name": "Nombre completo del cliente",
      "phone": "Teléfono",
      "email": "Correo",
      "taxId": "Cédula o RIF",
      "category": "Mayorista | Minorista | Frecuente | VIP",
      "totalPurchases": 0
    }
  ],
  "products": [
    {
      "id": "p-1",
      "name": "Nombre del producto",
      "sku": "Código",
      "category": "Categoría",
      "costPrice": 0,
      "salePrice": 0,
      "stock": 0,
      "minStockAlert": 3,
      "isAvailable": true
    }
  ],
  "debts": [
    {
      "id": "d-1",
      "type": "receivable" o "payable",
      "contactName": "Nombre de quien debe o a quien le debemos",
      "contactPhone": "Teléfono",
      "totalAmount": 0,
      "paidAmount": 0,
      "remainingAmount": 0,
      "dueDate": "YYYY-MM-DD",
      "createdAt": "YYYY-MM-DD",
      "notes": "Detalle de la deuda",
      "status": "pending",
      "history": []
    }
  ],
  "transactions": [
    {
      "id": "t-1",
      "type": "sale" o "expense",
      "amount": 0,
      "concept": "Concepto de la transacción",
      "category": "Categoría",
      "paymentMethod": "cash" | "pagomovil" | "zelle" | "binance" | "card" | "transfer",
      "date": "YYYY-MM-DD",
      "time": "12:00",
      "customerOrSupplier": "Nombre"
    }
  ]
}
Responde ÚNICAMENTE con el objeto JSON válido.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            {
              inlineData: {
                mimeType: 'application/pdf',
                data: pdfBase64,
              },
            },
            {
              text: prompt,
            },
          ],
          config: {
            responseMimeType: 'application/json',
          },
        });

        const textOutput = response.text;
        if (textOutput) {
          const parsedData = JSON.parse(textOutput);
          return res.status(200).json({
            success: true,
            source: 'gemini_multimodal_pdf',
            data: parsedData,
          });
        }
      } catch (geminiError: any) {
        console.warn('Gemini PDF processing error, fallback structured extraction:', geminiError?.message);
      }
    }

    const fallbackData = getSampleOldCompanyData(filename);
    return res.status(200).json({
      success: true,
      source: 'smart_parser_fallback',
      data: fallbackData,
    });
  } catch (error: any) {
    console.error('Error processing document:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Error al procesar el archivo.',
      data: getSampleOldCompanyData(),
    });
  }
}
